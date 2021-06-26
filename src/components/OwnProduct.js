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

import useStyles from "./css/productstyles";

const OwnProduct = ({ product }) => {
  const classes = useStyles();
  const db = firebase.firestore();
  const { currentUser } = useAuth();
  const currentUserID = currentUser.uid;

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
      <CardMedia
        className={classes.media}
        image={product.photos}
        title={product.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5">${product.price}</Typography>
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