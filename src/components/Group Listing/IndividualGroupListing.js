import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import NumericInput from "react-numeric-input";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../../contexts/AuthContext";

import useStyles from "../css/productstyles";

const IndividualGroupListing = ({ product }) => {
  const classes = useStyles();
  const quantityRef = useRef();
  const db = firebase.firestore();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  var dateTime = product.collectionDate.toDate().toString();

  const pictures = product.photos;

  var orders = product.orders;


  function handleCloseOrder(e) {
    e.preventDefault();

    var otherIDs = product.orderIDs;

    try {
      setError("");
      setLoading(true);

      //update all the buyers closed value to true
      otherIDs.map((id) => {
        db.collection(id)
          .where("type", "==", "groupDelivery")
          .where("collectionDate", "==", product.collectionDate)
          .where("collectionLocation", "==", product.collectionLocation)
          .where("title", "==", product.title)
          .where("desc", "==", product.desc)
          .get()
          .then((query) => {
            const doc = query.docs[0];
            doc.ref.update({
              closed: true,
            });
          });
      });

      //update category collection to closed
      db.collection(product.category)
        .where("type", "==", "groupDelivery")
        .where("id", "==", product.id)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            closed: true,
          });
        });

      //add into seller collection a pending order
      db.collection(product.seller).add({
        title: product.title,
        id: currentUser.uid,
        price: product.price,
        desc: product.desc,
        photos: product.photos,
        type: "pendingOrderGroup",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryLimit: product.deliveryLimit,
        collectionLocation: product.collectionLocation,
        collectionDate: product.collectionDate,
        orderedBy: currentUser.displayName,
        orders: product.orders,
        orderIDs: product.orderIDs,
      });
    } catch {
      setError("Failed to add item");
    }
    setLoading(false);
    alert("Successfully added item");
    history.push("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (quantityRef.current.state.value == undefined) {
      return setError("Please enter a quantity");
    }

    if (quantityRef.current.state.value == 0) {
      return setError("Please enter a quantity");
    }

    var newOrder = `${currentUser.displayName} x${quantityRef.current.state.value}`;

    var newTotalOrders = parseFloat(quantityRef.current.state.value) + product.orderCount;

    if (newTotalOrders > product.deliveryLimit) {
      return setError("Quantity exceeded total amount that can be delivered by the store")
    }

    try {
      setError("");
      setLoading(true);

      //add the order into orders array in category collection
      // query and then update
      db.collection(product.category)
        .where("type", "==", "groupDelivery")
        .where("id", "==", product.id)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            orders: firebase.firestore.FieldValue.arrayUnion(newOrder),
            orderIDs: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
            orderCount: newTotalOrders,
          });
        });

      //adding the new buyer collection to see
      db.collection(currentUser.uid).add({
        title: product.title,
        owner: product.id,
        seller: product.seller,
        id: currentUser.uid,
        price: product.price,
        desc: product.desc,
        photos: product.photos,
        type: "groupDelivery",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryLimit: product.deliveryLimit,
        collectionDate: product.collectionDate,
        collectionLocation: product.collectionLocation,
        order: `${product.title} x${quantityRef.current.state.value} (${product.unit})`,
        closed: false,
        sellerEmail: product.email,
      });

      //add to original owner collection

      db.collection(product.id)
        .where("type", "==", "groupDelivery")
        .where("title", "==", product.title)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            otherOrder: firebase.firestore.FieldValue.arrayUnion(newOrder),
            orderIDs: firebase.firestore.FieldValue.arrayUnion(currentUser.uid),
            orders: firebase.firestore.FieldValue.arrayUnion(newOrder),
          });
        });
    } catch {
      setError("Failed to confirm order");
    }
    setLoading(false);
    alert("Successfully confirmed your order");
    history.goBack();
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          <Carousel className={classes.media} animation="fade" autoPlay={false}>
            {pictures.map((picture) => {
              return <img className={classes.image} src={picture} />;
            })}
          </Carousel>
          <CardContent>
            <div className={classes.cardContent}>
              <strong>Location:</strong> {product.collectionLocation}
            </div>
            <div>
              <strong>Date & Time:</strong> {dateTime}
            </div>
            <br />
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="h6">
              ${product.price} {product.unit}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.desc}
            </Typography>
            <br />
            <Typography>
              <strong>
                *Max orders per group delivery: {product.deliveryLimit}
              </strong>
              <br />
              <strong>Current Orders:</strong>
            </Typography>
            {orders.map((order) => (
              <Typography>{order}</Typography>
            ))}
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className={classes.cardActions}>
          {currentUser.uid == product.id ? (
            <Button
              type="submit"
              variant="contained"
              className={classes.buttonTwo}
              onClick={handleCloseOrder}
            >
              Close Group Order
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={handleClickOpenTwo}
            >
              Add to Group Order
            </Button>
          )}
        </CardActions>
      </Card>
      <Dialog
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add to Group Order?"}
        </DialogTitle>
        <DialogContent>
          <p style={{ fontWeight: "500" }}>Quantity:</p>
          {error && <Alert variant="danger"> {error} </Alert>}
          <NumericInput
            className="form-control"
            min={0}
            max={99999999}
            mobile
            strict
            required
            ref={quantityRef}
          />
          <DialogContentText id="alert-dialog-description">
            *Once confirmed, you will not be able to undo the action
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.addOrder} onClick={handleSubmit}>
            Confirm Order
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Carousel className={classes.media} animation="fade" autoPlay={false}>
          {pictures.map((picture) => {
            return <img className={classes.image} src={picture} />;
          })}
        </Carousel>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {product.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            <strong>Price</strong>: ${product.price} {product.unit}
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography>
            <strong>Delivery Location:</strong> {product.collectionLocation}
          </Typography>
          <Typography>
            <strong>Delivery Date & Time:</strong> {dateTime}
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography>{product.desc}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography>
            <strong>
              *Max orders per group delivery: {product.deliveryLimit}
            </strong>
            <br />
            <strong>Current Orders:</strong>
          </Typography>
          {orders.map((order) => (
            <Typography>{order}</Typography>
          ))}
        </DialogContent>
        <DialogActions className={classes.cardActionsTwo}>
          {/* add order button will be here */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default IndividualGroupListing;
