import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { useLocation } from "react-router-dom";
import NumericInput from "react-numeric-input";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  const classes = useStyles();
  const quantityRef = useRef();
  const deliveryLocationRef = useRef();
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const backToListing = "< Back to Listings";
  const db = firebase.firestore();
  const location = useLocation();
  const { product } = location.state;
  const [totalSum, setTotalSum] = useState(product.delivery);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    handleCalculate();
  }, [checked]);

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleBack = () => {
    history.goBack();
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (quantityRef.current.state.value == undefined || quantityRef.current.state.value == 0) {
      return setError("Please fill in the quantity with a suitable amount")
    }

    if (checked) {
      if (!deliveryLocationRef.current.value) {
        return setError("Please fill in a delivery address");
      }
    }

    var deliveryLocation;

    if (deliveryLocationRef.current == undefined) {
      deliveryLocation = null;
    } else {
      deliveryLocation = deliveryLocationRef.current.value;
    }

    var finalPrice;

    if (checked) {
      finalPrice =
        quantityRef.current.state.value * product.price + product.delivery;
    } else {
      finalPrice = quantityRef.current.state.value * product.price;
    }

     try {
      setError("");
      setLoading(true);

      db.collection(currentUser.uid).add({
        //for buyer
        title: product.title,
        id: product.id,
        price: finalPrice,
        desc: product.desc,
        photos: product.photos,
        type: "order",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryOption: product.deliveryOption,
        location: product.location,
        deliveryLocation: deliveryLocation,
        quantity: quantityRef.current.state.value,
        seller: product.id,
        pickupTiming: product.pickupTiming,
      });

      db.collection(product.id).add({
        //for seller
        title: product.title,
        id: currentUser.uid,
        price: finalPrice,
        desc: product.desc,
        photos: product.photos,
        type: "pendingOrder",
        category: product.category,
        unit: product.unit,
        delivery: product.delivery,
        deliveryOption: product.deliveryOption,
        location: product.location,
        deliveryLocation: deliveryLocation,
        orderedBy: currentUser.displayName,
        quantity: quantityRef.current.state.value,
      });
    } catch {
      setError("Failed to confirm order");
    }
    setLoading(false);
    alert("Successfully confirmed your order");
    history.goBack(); 
  }

  const pictures = product.photos;

  function handleCalculate() {
    if (checked) {
      setTotalSum(
        quantityRef.current.state.value * product.price + product.delivery
      );
    } else {
      setTotalSum(quantityRef.current.state.value * product.price);
    }
  }

  var pickupLocation;

  if (product.location == "") {
    pickupLocation =
      "Not stated by seller, please opt for delivery or chat with the seller to find out";
  } else {
    pickupLocation = product.location;
  }

  return (
    <>
      <Button className={classes.back} onClick={handleBack}>
        {backToListing}
      </Button>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <div className={classes.row}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Order confirmation
            </Typography>
          </div>
          {error && <Alert variant="danger"> {error} </Alert>}
          <Grid container spacing={2}>
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
            <Grid item xs={12} sm={6}>
              <p className={classes.subheading}>Quantity:</p>
              <NumericInput
                className="form-control"
                min={0}
                max={99999999}
                mobile
                strict
                required
                ref={quantityRef}
              />{" "}
              ({product.unit})
            </Grid>
            <Grid item xs={12}>
              <p style={{ fontSize: "14px" }}>
                *If the item/service is based on a subscription basis, just
                leave the quantity as one and confirm the order, the seller will
                be informed of your interest
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.subheading}>Self Pickup Location:</p>
              {pickupLocation}
              <p className={classes.subheading}>Self Pickup Timing:</p>
              {product.pickupTiming}
            </Grid>
            {product.deliveryOption ? (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleCheck}
                      name="deliveryBoolean"
                    />
                  }
                  label="Opt for Delivery instead?"
                />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <p className={classes.subheading}>
                  *Not Available for delivery/Group Order
                </p>
              </Grid>
            )}
            {checked ? (
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  required={true}
                  id="deliveryLocation"
                  label="Delivery Address"
                  name="deliveryLocation"
                  inputRef={deliveryLocationRef}
                />
              </Grid>
            ) : null}
            {error && <Alert variant="danger"> {error} </Alert>}
            {checked ? (
              <Grid item xs={12}>
                <p className={classes.subheading}>
                  Total + Delivery( ${product.delivery} ):
                </p>
                {totalSum}
              </Grid>
            ) : (
              <Grid item xs={12}>
                <p className={classes.subheading}>Total:</p>
                {totalSum}
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                className={classes.calculate}
                onClick={handleCalculate}
              >
                Calculate
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <a href="./Chat">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  className={classes.button}
                >
                  Chat with Seller
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography className={classes.text}>OR</Typography>
            </Grid>
            {product.deliveryOption ? (
              <>
                <Grid item xs={12} sm={8}>
                  <Link
                    to={{
                      pathname: "/pages/new-group-listing",
                      state: {
                        product: product,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      className={classes.button}
                    >
                      Add to a new group listing
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography className={classes.text}>OR</Typography>
                </Grid>
              </>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              className={classes.submit}
              onClick={handleSubmit}
            >
              Confirm Order
            </Button>
          </Grid>
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
