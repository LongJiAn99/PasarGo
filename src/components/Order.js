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
        <CardActionArea onClick={handleClickOpen}>
          <Carousel className={classes.media} animation="fade" autoPlay={false}>
            {pictures.map((picture) => {
              return <img className={classes.image} src={picture} />;
            })}
          </Carousel>
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
            </p>{" "}
            <p> {deliveryMode}</p>
            <br />
            <p style={{ fontSize: "16px", fontWeight: "600" }}>
              Total Cost:
            </p>{" "}
            <p> {product.price}</p>
            <Typography variant="body2">{orderedBy}</Typography>
          </CardContent>
        </CardActionArea>
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
          <Typography gutterBottom>Self Pickup: {pickupLocation}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>{product.desc}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Order;
