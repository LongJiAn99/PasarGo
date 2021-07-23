import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useLocation } from "react-router-dom";
import NumericInput from "react-numeric-input";

export default function NewGroupListing() {
  const classes = useStyles();
  const quantityRef = useRef();
  const collectionLocationRef = useRef();
  const collectionDateRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const backButton = "< Back to Order Confirmation";
  const db = firebase.firestore();
  const location = useLocation();
  const { product } = location.state;
  const [totalSum, setTotalSum] = useState(product.delivery);
  const [checked, setChecked] = useState(false);
  const handleBack = () => {
    history.goBack();
  };
  const pictures = product.photos;

  function handleSubmit(e) {
    e.preventDefault();

    var date;

    date = new Date(collectionDateRef.current.value);

    var order = `${currentUser.displayName} x${quantityRef.current.state.value}`
  
     try {
      setError("");
      setLoading(true); 

       db.collection(currentUser.uid).add({
        seller: product.id,
        owner: currentUser.uid,
        title: product.title,
        id: currentUser.uid,
        price: product.price,
        desc: product.desc,
        photos: product.photos,
        type: "groupDelivery",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryLimit: product.deliveryLimit,
        collectionDate: date,
        collectionLocation: collectionLocationRef.current.value,
        order: `${product.title} x${quantityRef.current.state.value} (${product.unit})`,
        otherOrder: [],
        closed: false,
        orderIDs: [currentUser.uid],
        orders: [order],
      }); 
 
      db.collection(product.category).add({
        title: product.title,
        id: currentUser.uid,
        seller: product.id,
        price: product.price,
        desc: product.desc,
        photos: product.photos,
        type: "groupDelivery",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryLimit: product.deliveryLimit,
        collectionDate: date,
        collectionLocation: collectionLocationRef.current.value,
        orderIDs: [currentUser.uid],
        orders: [order],
        closed: false,
      });
    } catch {
      setError("Failed to add item");
    }
    setLoading(false);
    alert("Successfully added item");
    history.push("/"); 
  }

  return (
    <>
      <Button className={classes.back} onClick={handleBack}>
        {backButton}
      </Button>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <div className={classes.row}>
            <Typography component="h1" variant="h5" className={classes.title}>
              New Group Listing
            </Typography>
          </div>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Box
            border={1}
            borderRadius="borderRadius"
            style={{ padding: "10px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p className={classes.heading}>Product:</p>
              </Grid>
              <Grid item xs={12}>
                <Carousel
                  className={classes.media}
                  animation="fade"
                  autoPlay={false}
                >
                  {pictures.map((picture) => {
                    return <img className={classes.image} src={picture} />;
                  })}
                </Carousel>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.subheading}>Description:</p>
                {product.desc}
              </Grid>
              <Grid item xs={12}>
                <p className={classes.subheading}>
                  Price: {product.price} {product.unit}
                </p>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.subheading}>
                  *Max quantity for Group Listing: {product.deliveryLimit}
                </p>
              </Grid>
            </Grid>
          </Box>
          <br />
          <p className={classes.subheading}>Quantity:</p>
          <NumericInput
            className="form-control"
            min={0}
            max={99999999}
            mobile
            strict
            required
            ref={quantityRef}
          />
          ({product.unit})
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p className={classes.heading}>Details:</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="collection-location"
                label="Collection Location (MRT Station)"
                name="collection-location"
                inputRef={collectionLocationRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="datetime-local"
                label="Collection Time and Date"
                type="datetime-local"
                defaultValue="2021-07-19T10:30"
                className={classes.textField}
                inputRef={collectionDateRef}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            className={classes.submit}
            onClick={handleSubmit}
          >
            Create New Group Listing
          </Button>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    display: "flex",
  },
  title: {
    paddingTop: "7px",
    fontFamily: "Poppins",
    paddingBottom: "10px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "black",
    backgroundColor: "#58D68D",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#58D68D",
      color: "#FFFFFF",
    },
  },
  calculate: {
    color: "black",
    backgroundColor: "#A9A8A8",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#5A5757",
      color: "#FFFFFF",
    },
    alignSelf: "left",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  back: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 600,
    padding: "0px 10px",
    color: "black",
    height: "37px",
  },
  input: {
    display: "none",
  },
  text: {
    fontWeight: "600",
    textDecoration: "underline",
    fontSize: "25px",
    color: "black",
  },
  media: {
    height: "auto",
    width: "100%",
  },
  image: {
    height: "auto",
    width: "100%",
  },
  subheading: {
    fontWeight: "500",
  },
  button: {
    color: "black",
    backgroundColor: "#28E8F8",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#28E8F8",
      color: "#FFFFFF",
    },
  },
  heading: {
    fontWeight: "500",
    fontSize: "20px",
    paddingTop: "10px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        PasarGo!
      </Link>{" "}
      {2021}
      {"."}
    </Typography>
  );
}
