import React, { useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  CardActions,
  DialogContentText,
  Button,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./css/productstyles";
import { CheckCircle, Cancel } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";

// the individual card used for My Orders

const ConfirmedOrder = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const db = firebase.firestore();
  const { currentUser } = useAuth();
  const reasonRef = useRef();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /*   if (product.confirmed) {
    setStatus("Order was Confirmed by Seller");
  } else if (product.rejected) {
    setStatus("Order was Rejected by Seller");
  }
 */
  var orders;

  if (product.orders) {
    orders = product.orders;
  } else {
    orders = [];
  }

  var dateTime;

  if (product.collectionDate) {
    dateTime = product.collectionDate.toDate().toString();
  } else {
    dateTime = null;
  }

  var pickupLocation;

  if (product.location == "") {
    pickupLocation =
      "Not stated by seller, please opt for delivery or chat with the seller to find out";
  } else {
    pickupLocation = product.location;
  }

  const pictures = product.photos;

  var orderedBy;

  if (product.orderedBy != null) {
    orderedBy = `Ordered By: ${product.orderedBy}`;
  } else {
    orderedBy = null;
  }

  var deliveryMode;

  if (product.deliveryLocation != null) {
    deliveryMode = `Delivering to ${product.deliveryLocation}`;
  } else {
    deliveryMode = `Self Pick Up at ${product.location}`;
  }

  const handleAccept = (e) => {
    e.preventDefault();

    var otherIDs = product.orderIDs;
    // for buyers, their user collection will have a boolean confirmed set to true
    // for sellers, their type will be updated to confirmed and will appear in confirmed orders tab

    try {
      setError("");
      setLoading(true);

      //for normal orders
      db.collection(currentUser.uid)
        .where("type", "==", "pendingOrder")
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .where("id", "==", product.id)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            type: "confirmedOrder",
          });
        });

      db.collection(product.id)
        .where("type", "==", "order")
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .where("id", "==", currentUser.uid)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            confirmed: true,
          });
        });

      // for group orders
      db.collection(currentUser.uid)
        .where("type", "==", "pendingOrderGroup")
        .where("collectionDate", "==", product.collectionDate)
        .where("collectionLocation", "==", product.collectionLocation)
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            type: "confirmedGroupOrder",
          });
        });

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
              confirmed: true,
            });
          });
      });
    } catch {
      setError("Failed to accept order");
    }
    setLoading(false);
    alert("Successfully accepted order");
    history.goBack();
  };

  const handleReject = (e) => {
    e.preventDefault();

    var otherIDs;

    if (product.orderIDs) {
      otherIDs = product.orderIDs;
    } else {
      otherIDs = null;
    }

    var reason = reasonRef.current.value;

    /*For seller it will be deleted off their user colleciton
    For all the buyers will add in a boolean rejected = true ALONG with reason */

    try {
      setError("");
      setLoading(true);

      // for group orders
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
              rejected: true,
              reason: reason,
            });
          });
      });

      db.collection(currentUser.uid)
        .where("type", "==", "pendingOrderGroup")
        .where("collectionDate", "==", product.collectionDate)
        .where("collectionLocation", "==", product.collectionLocation)
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.delete();
        });

      //for normal orders
      db.collection(product.id)
        .where("type", "==", "order")
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .where("id", "==", currentUser.uid)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.update({
            rejected: true,
            reason: reason,
          });
        });

      db.collection(currentUser.uid)
        .where("type", "==", "pendingOrder")
        .where("title", "==", product.title)
        .where("desc", "==", product.desc)
        .where("id", "==", product.id)
        .get()
        .then((query) => {
          const doc = query.docs[0];
          doc.ref.delete();
        });
    } catch {
      setError("Failed to reject order");
    }
    setLoading(false);
    alert("Successfully rejected order");
    history.goBack();
  };

  return (
    <>
      <Card className={classes.root}>
        <Carousel className={classes.media} animation="fade" autoPlay={false}>
          {pictures.map((picture) => {
            return <img className={classes.image} src={picture} />;
          })}
        </Carousel>
        {product.type != "confirmedGroupOrder" ? (
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
            </div>
            <Typography variant="body1">
              {product.quantity}x {product.unit}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.desc}
            </Typography>
            <br />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Details:</p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              Delivery Location:
            </p>
            <p> {deliveryMode}</p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "600" }}>Total Cost:</p>
            <p> {product.price}</p>
            <Typography variant="body2">{orderedBy}</Typography>
          </CardContent>
        ) : (
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
        )}
        {product.orderedBy
          ? [
              product.type != "confirmedOrder" && product.type != "confirmedGroupOrder" ? (
                <CardActions disableSpacing className={classes.cardActionsTwo}>
                  <IconButton
                    className={classes.icon}
                    aria-label="Accept"
                    onClick={handleAccept}
                  >
                    <CheckCircle />
                  </IconButton>
                  <IconButton
                    className={classes.icon}
                    aria-label="Reject"
                    onClick={handleClickOpen}
                  >
                    <Cancel />
                  </IconButton>
                </CardActions>
              ) : null,
            ]
          : null}
      </Card>
      {/* for when the user clicks on reject icon */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please state a reason for rejection"}
        </DialogTitle>
        <DialogContent>
          <p style={{ fontWeight: "500" }}>Reason:</p>
          {error && <Alert variant="danger"> {error} </Alert>}
          <TextField
            variant="outlined"
            required
            fullWidth
            id="reason"
            label="eg. Over the max delivery order stated"
            name="reason"
            inputRef={reasonRef}
          />
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.addOrder} onClick={handleReject}>
            Confirm Rejection
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmedOrder;
