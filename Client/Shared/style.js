import styled from "styled-components";
import "../font/font.css";
import { Link } from "react-router-dom";

//

export const ButtonAscent = styled.button`
  font-family: nexa-bold;
  background-color: ${(props) => props.theme.$buttonBlue};
  color: ${(props) => props.theme.$bgWhite};
  padding: 10px 30px;
  outline: none;
  border: none;
  outline: none;
  border-radius: 30px;
  margin: 1rem 0;
  letter-spacing: 1.1px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const GoogleButton = styled.button`
  border: 1px solid ${(props) => props.theme.$mainBlue};
  padding: 10px 30px;
  width: 100%;
  background-color: ${(props) => props.theme.$bgWhite};
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 100%;
  display: block;
  &::placeholder {
    font-size: 1rem;
    text-transform: capitalize;
  }
  /* @media (max-width: 768px) {
    width: 85%;
    margin: 1rem auto;
  } */
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.$bgWhite};
  width: 70%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 5px;
  @media (min-width: 769px) {
    position: relative;
    top: 40%;
    width: 40%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  @media (max-width: 768px) {
    width: 85% !important;
    margin: 0 auto;
    top: 20%;
  }
`;

export const H2 = styled.h2`
  font-family: nexa-bold;
  font-size: 1.7rem;
  letter-spacing: 1.5px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  font-family: nexa-bold;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const H4 = styled.h4`
  font-family: nexa-light;
  font-size: 1.2rem;
  line-height: 1.5;
`;
export const H5 = styled.h5`
font-family: nexa-light;
font-size:1.2rem
`
export const H1 = styled.h1`
  font-family: nexa-bold;
  font-size: 2.5rem;
  letter-spacing: 1.5px;
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const P = styled.p`
  font-family: nexa-light;
  font-size: 1rem;
`;
export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.$bgWhite};
  font-family: nexa-light;
  font-size: 1.2rem;
  padding-right: 10px;

  &:hover {
    text-decoration: none;
  }
`;

export const SideMargin = styled.div`
  margin: 0px 2rem;
  @media (min-width: 768px) {
    margin: 0px 5rem;
  }
  @media (min-width: 1200px) {
    margin: 0px 7rem;
  }
`;
