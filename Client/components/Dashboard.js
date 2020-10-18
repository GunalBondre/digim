import React, { Component } from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import "../stylesheet/sidebar";
import "../stylesheet/common";

import * as tags from "../Shared/style";
import { Link } from "react-router-dom";
const DashboardWrap = styled.div`
  width: 100%;
  H4 {
    color: ${(props) => props.theme.$mainBlue};
  }
  .onboarding {
    ul {
      padding-top: 30px;
      li {
        padding: 20px 10px;
        border-bottom: 1px solid ${(props) => props.theme.$mainBlue};
      }
    }
  }
  H4 {
    text-align: left;
    font-family: Nexa-Bold;
  }
  P {
    text-align: left;
  }
`;
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardWrap>
          <div className="container">
            <div className="sidebar">
              <div className="left-section">
                <Sidebar />
              </div>
              <div className="right-section">
                <tags.H2>Dashboard</tags.H2> <hr />
                <div className="onboarding">
                  <tags.H3>Follow below steps to activate your account</tags.H3>
                  <ul>
                    <li>
                      <Link to="/profile">
                        <tags.H4> Complete Your profile form</tags.H4>{" "}
                        <tags.P>Enter Your Details To complete Profile</tags.P>
                      </Link>
                    </li>
                    <li>
                      <Link to="/users/import-options">
                        <tags.H4> Import Your Contacts</tags.H4>{" "}
                        <tags.P>
                          Upload All Your Contacts So You can Start Sending
                          Emails
                        </tags.P>
                      </Link>
                    </li>
                    <li>
                      <Link to="/camp/email">
                        <tags.H4> Create Your First Email Campaign</tags.H4>{" "}
                        <tags.P>Create Your First Email Campaign</tags.P>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DashboardWrap>
      </div>
    );
  }
}
