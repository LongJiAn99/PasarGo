import React, { useRef, useState } from "react";
import { Form, Button, Alert, Image } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import logo from '../images/logo.jpg'

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
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
<Box container justify='center'>
    <Image src = {logo} alt = 'imagehere' roundedCircle />
      <h2 className="text-center mb-4">Profile</h2>
      </Box>
      <Grid container justify="center">
        {error && <Alert variant="danger">{error}</Alert>}
        <Grid item xs = {6}>
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
          <Button disabled={loading} className="w-100" type="submit">
            Update
          </Button>
        </Form>
        <div className="w-100 text-center mt-2">
          <Link to="/">Cancel</Link>
        </div>
        </Grid>
      </Grid>
    </>
  );
}
