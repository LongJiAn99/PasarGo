import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

import useStyles from "./css/productstyles";

const OwnGroupOrder = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const db = firebase.firestore();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var dateTime = product.collectionDate.toDate().toString();

  const pictures = product.photos;

  var orders;

  if (product.otherOrder) {
    orders = product.otherOrder;
  } else {
    orders = null;
  }

  const handleDelete = () => {
    const docRef = db
      .collection(currentUser.uid)
      .where("title", "==", product.title)
      .where("desc", "==", product.desc)
      .where("rejected", "==", true)
      .where("type", "==", "groupDelivery");

    try {
      setError("");
      setLoading(true);

      docRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      });
    } catch {
      setError("Failed to delete item");
    }
    setLoading(false);
    alert("Item successfully deleted");
    history.push("/");
  };

  function handleCloseOrder(e) {
    e.preventDefault();

    var otherIDs = product.orderIDs;

    try {
      setError("");
      setLoading(true);

      //update all buyers closed boolean to true
      otherIDs.map((id) => {
        db.collection(id)
          .where("type", "==", "groupDelivery")
          .where("collectionDate", "==", product.collectionDate)
          .where("collectionLocation", "==", product.collectionLocation)
          .get()
          .then((query) => {
            const doc = query.docs[0];
            doc.ref.update({
              closed: true,
            });
          });
      });

      //update category collection closed boolean to true
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
    alert("Successfully closed");
    history.goBack();
  }

  const { currentUser } = useAuth();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClickOpen}>
          {product.confirmed ? (
            <Alert variant="success">*Order has been confirmed by Seller</Alert>
          ) : (
            [
              product.rejected ? (
                <Alert variant="danger">
                  *Order has been rejected by Seller (<strong>Reason:</strong>{" "}
                  {product.reason})
                </Alert>
              ) : (
                <Alert>*Order awaiting approval from seller</Alert>
              ),
            ]
          )}
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
            <div>
              <strong>Order:</strong> {product.order}
              <br />
              {orders == null ? null : (
                <>
                  <strong>Other orders:</strong>
                  {orders.map((o) => (
                    <Typography>{o}</Typography>
                  ))}
                </>
              )}
            </div>
          </CardContent>
        </CardActionArea>
        {currentUser.uid == product.owner
          ? [
              product.closed == true ? (
                <Typography className={classes.footer}>
                  --Order Closed--
                </Typography>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.buttonTwo}
                  onClick={handleCloseOrder}
                >
                  Close Group Order
                </Button>
              ),
            ]
          : null}
        {product.rejected ? (
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
               onClick={handleDelete} 
              className={classes.icon}
              aria-label="Delete"
            >
              <DeleteForeverRoundedIcon />
            </IconButton>
          </CardActions>
        ) : null}
        <a href="./Chat">
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            className={classes.button}
            fullWidth
            style={{
              color: "black",
              backgroundColor: "#28E8F8",
              fontSize: "15px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#28E8F8",
                color: "#FFFFFF",
              },
            }}
          >
            Chat with Seller
          </Button>
        </a>
      </Card>
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
            <strong>Order:</strong>
          </Typography>
          <Typography>{product.order}</Typography>
          {orders == null ? null : (
            <>
              <strong>Other orders:</strong>
              {orders.map((o) => (
                <Typography>{o}</Typography>
              ))}
            </>
          )}
        </DialogContent>
        <DialogActions className={classes.cardActionsTwo}>
          {/* add order button will be here */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OwnGroupOrder;
