import React from "react";
import { H3, H5 } from "../Shared/style";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom";

const FooterSection = styled.div`
  padding-top: 100px;
  .row {
    text-align: center;
  }
  .privacy {
    H5 {
      display: inline-block;
      padding-right: 20px;
      color: #000000;
      @media (max-width: 767px) {
        font-size: 1rem;
        text-align: center;
      }
    }
    Link {
      text-decoration: none;
    }
  }
`;

export default function Footer() {
  return (
    <div>
      <Router>
        <FooterSection>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <H3>Solutions</H3>
                <H5>Features</H5>
                <H5>Enterprise Offer</H5>
                <H5>Partner With Us</H5>
              </div>
              <div className="col-md-4">
                <H3>Company</H3>
                <H5>About Us</H5>
                <H5>Contact Us</H5>
                <H5>Jobs</H5>
              </div>
              <div className="col-md-4">
                <H3>Resources</H3>
                <H5>Blog</H5>
                <H5>Facebook</H5>
                <H5>Twitter</H5>
              </div>
            </div>
            <hr />
            <div className="privacy">
              <div className="row">
                <div className="col-md-7 text-left">
                  <H5>Copyright @ DIGIM ! All rights reserved</H5>
                </div>
                <div className="col-md-5">
                  <Link to="">
                    <H5>Privacy</H5>
                  </Link>
                  <Link to="">
                    <H5>Terms and condition</H5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FooterSection>
      </Router>
    </div>
  );
}
