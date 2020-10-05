import React, { Component } from "react";
import styled from "styled-components";
import { H1, SideMargin, H4, ButtonAscent } from "../Shared/style";
import imgSrc from "../assets/email.jpg";

const Wrapper = styled.div`
  display: flex;
  padding-top: 100px;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  .left-section {
    width: 40%;
    @media (max-width: 480px) {
      width: 100%;
    }
    H1 {
      max-width: 400px;
      font-size: 3.5rem;
      padding-top: 100px;
      @media (max-width: 480px) {
        font-size: 2rem;
        padding-top: 20px;
      }
    }
    H4 {
      max-width: 450px;
      border-left: 3px solid ${(props) => props.theme.$orange};
      padding-left: 20px;
      margin-top: 20px;
    }
  }
  .right-section {
    @media (max-width: 480px) {
      width: 100%;
    }
    width: 60%;
    img {
      width: 100%;
      padding-top: 50px;
      @media (max-width: 480px) {
        padding-top: 20px;
      }
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <SideMargin>
          <Wrapper>
            <div className="left-section">
              <H1>Prepare for take off</H1>
              <H4>
                Digim helps small businesses do big things, with the right tools
                and guidance every step of the way.
              </H4>
              <ButtonAscent>Take a free test drive</ButtonAscent>
            </div>
            <div className="right-section">
              <img src={imgSrc} alt="" />
            </div>
          </Wrapper>
        </SideMargin>
      </div>
    );
  }
}
