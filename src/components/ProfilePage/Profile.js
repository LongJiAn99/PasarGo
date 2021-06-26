import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { List, ListItem, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Container } from "react-bootstrap";

export default function Profile() {
  const { currentUser } = useAuth();
  const classes = useStyles();

  return (
    <>
      <Container className="d-flex h-100">
        <Card className={classes.card}>
          <Card.Body>
            <Container className={classes.image}>
              <Avatar
                src={currentUser.photoURL}
                alt=""
                className={classes.large}
              />
            </Container>
            <h2 className = {classes.heading}>Profile</h2>
            <List>
              <ListItem>
                <strong>Email:</strong>
                <p className= {classes.details}>{currentUser.email}</p>
              </ListItem>
              <ListItem>
                <strong>Username: </strong>
                <p  className= {classes.details}>{currentUser.displayName}</p>
              </ListItem>
            </List>
            <Link to="../pages/update-profile" className="btn btn-primary w-100 mt-3">
              Update Profile
            </Link>
          </Card.Body>
        </Card>
      </Container>
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
      fontWeight: '400',
      paddingLeft: '10px'
  }
}));