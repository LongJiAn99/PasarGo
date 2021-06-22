import React, { useState } from "react";
import Profile from "../components/ProfilePage/Profile";
import MyListing from "../components/ProfilePage/MyListing";
import { Tab, Nav, Row, Col, Alert } from "react-bootstrap";
import BackButton from "../components/BackButton";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./css/ProfilePage.css";

export default function ProfilePage() {
    const { logout } = useAuth();
    const history = useHistory();
    const [error, setError] = useState("");

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
      <br />
      <br />
      <br />
      <br />
      <br />
      {error && <Alert variant="danger">{error}</Alert>}
      <Tab.Container className="tab" defaultActiveKey="first">
        <Row>
          <Col sm={{ span: 2, offset: 1 }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="navlink" eventKey="first">
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navlink" eventKey="second">
                  My Listings
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navlink" eventKey="third">
                  My Wishlist
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="navlink" eventKey="fourth">
                  Orders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style = {{backgroundColor: '#007bff', borderRadius: '7px'}}>
                <Nav.Link className="navlink" onClick={handleLogout}>
                  <strong style = {{color: 'white'}}>Sign Out</strong>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={{span:9}}>
            <Tab.Content classname = 'tabpane'>
              <Tab.Pane eventKey="first">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <MyListing />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Profile />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
