import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav, Button } from "react-bootstrap";
export default class NavbarClass extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <div className="container">
            <Navbar.Brand href="/">DIGIM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="pricing" style={{ paddingTop: "15px" }}>
                  Pricing
                </Nav.Link>
                <Nav.Link href="signin" style={{ paddingTop: "15px" }}>
                  Signin
                </Nav.Link>
                <Nav.Link href="signup">
                  <Button variant="primary">Signup</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
