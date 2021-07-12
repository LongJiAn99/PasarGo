import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { storage } from "../config/firebase";
import '../App.css';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const usernameRef = useRef();
  const {
    currentUser,
    updatePassword,
    updateEmail,
    updateUsername,
    updateDisplayPhoto,
  } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const history = useHistory();
  const classes = useStyles();

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]); // try adding the .put(image) function here instead
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    const uploadTask = storage.ref(`profilepics/${image.name}`).put(image);

/*     uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log("test");
            updateDisplayPhoto(url);
          });
      }
    ); */

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (usernameRef.current.value !== currentUser.displayName) {
      promises.push(updateUsername(usernameRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref("profilepics")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                console.log("test");
                updateDisplayPhoto(url);
              });
          }
        );
      })
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Box container justify="center">
        <h2 className={classes.heading}>Profile</h2>
      </Box>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                ref={usernameRef}
                required
                defaultValue={currentUser.displayName}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="displayPhoto">
              <Form.Label>Update Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleUpload} />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to={{
                        pathname: "/pages/profile-page",
                        state: {
                          page: "first",
                        },
                      }} >Cancel</Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  card: {
    height: "100%",
    display: "flex",
    width: "80%",
    alignItems: "center",
  },
  image: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "20px",
  },
  heading: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: "30px",
    fontWeight: "600",
  },
  details: {
    fontWeight: "400",
    paddingLeft: "10px",
  },
}));
