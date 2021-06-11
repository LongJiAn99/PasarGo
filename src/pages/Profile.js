import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { List, ListItem, Avatar } from "@material-ui/core";
import BackButton from "../components/BackButton";
import { makeStyles } from "@material-ui/core/styles";
import "./css/Profile.css";

import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Alert,
  Nav,
  Image,
} from "react-bootstrap";

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
    width: "40%",
    alignItems: "center",
  },
  image: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: '20px'
  },
}));

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/pages/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <BackButton dest="/" text="< Back to Home" />
      <Container
        className="d-flex h-100"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card className={classes.card}>
          <Card.Body>
            <Container className={classes.image}>
              <Avatar
                className={classes.avatar}
                src={currentUser.photoURL}
                alt=""
                className={classes.large}
              />
            </Container>

            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <List>
              <ListItem>
                <strong>Email:</strong>
                <p>{currentUser.email}</p>
              </ListItem>
              <ListItem>
                <strong>Username: </strong>
                <p>{currentUser.displayName}</p>
              </ListItem>
            </List>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
      </Container>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title >Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </>
  );
}
