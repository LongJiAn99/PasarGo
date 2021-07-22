import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";
import Carousel from "react-material-ui-carousel";

import useStyles from "./css/productstyles";

//card used to see ur own products you are selling 

const OwnProduct = ({ product }) => {
  const classes = useStyles();
  const db = firebase.firestore();
  const { currentUser } = useAuth();
  const currentUserID = currentUser.uid;
  const pictures = product.photos;

  const docRef = db
    .collection(currentUserID)
    .where("title", "==", product.title)
    .where("desc", "==", product.desc); // for collections with user uid as collection name

  const docRefTwo = db
    .collection(product.category)
    .where("id", "==", currentUserID)
    .where("desc", "==", product.desc)
    .where("title", "==", product.title); // for the document under that category

  const handleDelete = () => {
    docRefTwo.get().then((querySnapshot) => {
      querySnapshot
        .forEach((doc) => {
          doc.ref.delete();
        })
    });

    docRef.get().then((querySnapshot) => {
      querySnapshot
        .forEach((doc) => {
          doc.ref.delete();
        })
    });
    alert('Item deleted successfully');
  };

  return (
    <Card className={classes.root}>
        <Carousel
          className= {classes.media}
          animation="fade"
          autoPlay={false}
        >
          {pictures.map((picture) => {
            return <img className={classes.image} src={picture} />;
          })}
        </Carousel>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5">${product.price} {product.unit}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          onClick={handleDelete}
          className={classes.icon}
          aria-label="Delete"
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OwnProduct;
