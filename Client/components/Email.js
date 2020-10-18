import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Sidebar from "./Sidebar";
import "../stylesheet/common";

import { H2, ButtonAscent } from "../Shared/style";
import styled from "styled-components";
const EmailCampaign = styled.div`
  H2 {
    display: inline-block;
    padding-top: 20px;
  }
  .createCampaign {
    display: flex;
    justify-content: space-between;
  }
  .nav {
    flex-wrap: nowrap;
  }
  a.nav-link {
    border-bottom: 1px solid #000000;
    margin-right: 10px;
    &:focus,
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.$buttonBlue};
    }
  }
  a {
    text-align: center;
    text-decoration: none;
    color: #000000;
  }
`;
export default class Email extends Component {
  render() {
    return (
      <div>
        <EmailCampaign>
          <div className="container">
            <div className="sidebar">
              <div className="left-section">
                <Sidebar />
              </div>
              <div className="right-section">
                <div className="createCampaign">
                  <H2>Email Campaigns</H2>
                  <ButtonAscent>Create an email campaign</ButtonAscent>
                </div>
                <Nav defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="/home">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Sent</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Draft</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Scheduled</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Suspended</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Running</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>
        </EmailCampaign>
      </div>
    );
  }
}
