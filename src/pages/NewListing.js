import React, { useState, useRef } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../contexts/AuthContext";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";

export default function NewListing() {
  const classes = useStyles();
  const titleRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const backToListing = "< Back to Listings";

 /*  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  } */

  return (
    <>
      <Button className={classes.button}>{backToListing}</Button>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.row}>
            <Typography component="h1" variant="h5" className = {classes.title}>
              Add a new Item to start selling!
            </Typography>
            <Avatar variant = 'rounded' className={classes.avatar}>
              <AddBoxIcon />
            </Avatar>
          </div>
          {error && <Alert variant="danger"> {error} </Alert>}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  inputRef={titleRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                multiline
                  variant="outlined"
                  required
                  rows = {4}
                  fullWidth
                  id="desc"
                  label="Description of the product/service"
                  name="desc"
                  inputRef={descRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="image"
                  label="Insert image of product here"
                  id="image"
                  inputRef={imageRef}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="./login" variant="Login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="./login" variant="Login">
                  Sign in with Google
                </Link>
              </Grid>
            </Grid>
          </form>
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
    alignContent: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.text.secondary,
    height: '33px',
    width: '33px',
  },
  title: {
      paddingTop: '7px',
      paddingRight: '5px',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: 600,
    padding: "0px 10px",
    color: "black",
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
