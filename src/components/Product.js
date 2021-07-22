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
} from "@material-ui/core";
import { AddShoppingCart, QuestionAnswer } from "@material-ui/icons";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import useStyles from "./css/productstyles";

const Product = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        <a href="./Chat">
        <IconButton className={classes.icon} aria-label="Accept">
            <QuestionAnswer />
        </IconButton>
        </a>
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
          <Typography><strong>Price</strong>: ${product.price} {product.unit}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography>{product.desc}</Typography>
        </DialogContent>
        <DialogActions className = {classes.cardActionsTwo}>
        <IconButton className={classes.icon} aria-label="Accept">
            <QuestionAnswer />
        </IconButton>
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
