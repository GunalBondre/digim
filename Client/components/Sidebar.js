import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { H2 } from "../Shared/style";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  padding: 5px 0;
  &:hover {
    text-decoration: none;
  }
  &:focus,
  &:active {
    color: ${(props) => props.theme.$mainBLue};
  }
`;

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
          </li>
          <li>
            <StyledLink to="/camp/email">Email</StyledLink>
          </li>
          <li>
            <StyledLink to="/statistics">Statistics</StyledLink>
          </li>
          <li>
            <StyledLink to="/settings">Settings</StyledLink>
          </li>
        </ul>
      </div>
    );
  }
}
