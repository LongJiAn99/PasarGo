import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  CardActions,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./css/productstyles";
import { CheckCircle, Cancel } from "@material-ui/icons";

// the individual card used for My Orders

const Order = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var orders;

  if (product.orders) {
    orders = product.orders
  } else {
    orders = [];
  }

  var dateTime;
  
  if (product.collectionDate) {
    dateTime = product.collectionDate.toDate().toString();
  } else {
    dateTime = null;
  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <>
      <Card className={classes.root}>
          <Carousel className={classes.media} animation="fade" autoPlay={false}>
            {pictures.map((picture) => {
              return <img className={classes.image} src={picture} />;
            })}
          </Carousel>
          {product.type != "pendingOrderGroup" ? (
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
              <p style={{ fontSize: "16px", fontWeight: "600" }}>
                Total Cost:
              </p>
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
        {product.orderedBy ? (
          <CardActions disableSpacing className={classes.cardActionsTwo}>
            <IconButton className={classes.icon} aria-label="Accept">
              <CheckCircle />
            </IconButton>
            <IconButton className={classes.icon} aria-label="Reject">
              <Cancel />
            </IconButton>
          </CardActions>
        ) : null}
      </Card>
    </>
  );
};

export default Order;
