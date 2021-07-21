import React from "react";
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
} from "@material-ui/core";
import { AddShoppingCart, QuestionAnswer } from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import useStyles from "./css/productstyles";

// the individual card used to see the orders

const Product = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var pickupLocation;

  if (product.location == "") {
    pickupLocation =
      "Not stated by seller, please opt for delivery or chat with the seller to find out";
  } else {
    pickupLocation = product.location;
  }

  var deliveryOption;

  if (product.deliveryOption) {
    deliveryOption = "Available for Delivery";
  } else {
    deliveryOption = "Not Available for Delivery";
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pictures = product.photos;

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
              <Typography variant="h5">
                ${product.price} {product.unit}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
              {product.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className={classes.cardActionsTwo}>
          <IconButton className={classes.icon} aria-label="Accept">
            <QuestionAnswer />
          </IconButton>
          <Button type="submit" variant="contained" className={classes.button}>
            <Link
              to={{
                pathname: "/pages/group-listing",
                state: {
                  category: product.category,
                  title: product.title,
                  desc: product.desc,
                },
              }}
              className={classes.button}
            >
              View Group Orders
            </Link>
          </Button>
          <IconButton className={classes.icon} aria-label="Add to Cart">
            <Link
              to={{
                pathname: "/pages/order-confirmation",
                state: {
                  product: product,
                },
              }}
              style={{ color: "#7E7D7D" }}
            >
              <AddShoppingCart />
            </Link>
          </IconButton>
        </CardActions>
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
            <strong>Self Pick-Up Location</strong>: {pickupLocation}
          </Typography>
          <Typography>
            <strong>Delivery:</strong> {deliveryOption}
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography>{product.desc}</Typography>
        </DialogContent>
        <DialogActions className={classes.cardActionsTwo}>
          <IconButton className={classes.icon} aria-label="Chat">
            <QuestionAnswer />
          </IconButton>
          <Button type="submit" variant="contained" className={classes.button}>
            <Link
              to={{
                pathname: "/pages/group-listing",
                state: {
                  category: product.category,
                  title: product.title,
                  desc: product.desc,
                },
              }}
              className={classes.button}
            >
              View Group Orders
            </Link>
          </Button>
          <IconButton className={classes.icon} aria-label="Add to Cart">
            <Link
              to={{
                pathname: "/pages/order-confirmation",
                state: {
                  product: product,
                },
              }}
              style={{ color: "#7E7D7D" }}
            >
              <AddShoppingCart />
            </Link>
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Product;
