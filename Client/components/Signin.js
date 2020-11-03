import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { userActions } from "../redux/actions/user.action";
import { connect } from "react-redux";
import authHeader from "../services/authHeader";
import jwt_decode from "jwt-decode";

import {
  Input,
  Form,
  GoogleButton,
  H1,
  P,
  H2,
  ButtonAscent,
  StyledLink,
} from "../Shared/style";
import "../font/font.css";

const Div = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.$mainBlue};
  padding-top: 100px;

  H2 {
    text-align: center;
    padding: 15px 0;
  }
  H1 {
    text-align: center;
  }

  P {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    margin: 10px 0 20px;
    line-height: 0.3em;
    padding-top: 15px;
  }
  span {
    background-color: white;
    padding: 0 10px;
  }
  .linkContainer {
    text-align: center;
  }
`;

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:3636/users/signin", userData)
      .then((response) => {
        if (response.data.token) {
          const token = response.data.token;
          const user = jwt_decode(token);
          localStorage.setItem("token", response.data);
          console.log(response.data);
          this.props.history.push("/");
          console.log("success");
          this.setState({
            email: response.data.email,
          });
        } else {
          this.props.history.push("/signin");
          console.log("fail");
        }
      });
  };

  render() {
    return (
      <Div>
        <H1>DIGIM</H1>
        <Form onSubmit={this.handleForm}>
          <H2>Sign In</H2>
          <Input
            type='email'
            placeholder='Enter email'
            onChange={this.handleInput}
            value={this.state.value}
            name='email'
          ></Input>
          <Input
            type='password'
            placeholder='Enter password'
            onChange={this.handleInput}
            value={this.state.value}
            name='password'
          ></Input>
          <ButtonAscent type='submit'>Get Started</ButtonAscent>
          <P>
            <span>OR</span>
          </P>
          <GoogleButton>Sign in With Google</GoogleButton>
        </Form>
        <div className='linkContainer'>
          <StyledLink to='Signup'>Create an account</StyledLink>
          <StyledLink to='ForgotPassword'>Forgot Password</StyledLink>
        </div>
      </Div>
    );
  }
}
// function mapState(state) {
//   const { loggingIn } = state.authentication;
//   return { loggingIn };
// }

// const actionCreators = {
//   login: userActions.signin,
//   logout: userActions.logout,
// };

// const connectedLoginPage = connect(mapState, actionCreators)(Signin);
// export { connectedLoginPage as Signin };
