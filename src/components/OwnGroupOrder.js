import React, { useState } from "react";
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
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import useStyles from "./css/productstyles";

const OwnGroupOrder = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var dateTime = product.collectionDate.toDate().toString();

  const pictures = product.photos;

  var orders = product.orders;

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
            <div>
              <strong>Order:</strong> {product.order}
            </div>
          </CardContent>
        </CardActionArea>
        {/*         <CardActions disableSpacing className={classes.cardActions}>
        </CardActions> */}
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
{/*           {orders.map((order) => (
            <Typography>{order}</Typography>
          ))} */}
          <Typography>{product.order}</Typography>
        </DialogContent>
        <DialogActions className={classes.cardActionsTwo}>
          {/* add order button will be here */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OwnGroupOrder;
