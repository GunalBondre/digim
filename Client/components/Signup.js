import React, { Component } from "react";
import styled from "styled-components";
import { link } from "react-router-dom";
import register from "../services/authService";
import axios from "axios";
// import { connect } from "react-redux";
// import { userActions } from "../redux/actions/user.action";
import {
  Input,
  Form,
  H2,
  H3,
  H1,
  ButtonAscent,
  GoogleButton,
  P,
  StyledLink,
} from "../Shared/style";
import "../font/font.css";

const Header = styled.div`
  text-align: center;
  padding-top: 30px;
  padding: 15px 0px;
  display: block;
  width: 100%;
`;
const Span = styled.span`
  font-family: nexa-bold;
  font-size: 1.2rem;
  padding-left: 10px;
`;
const I = styled.i`
  color: ${(props) => props.theme.$buttonBlue};
`;
const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.$mainBlue};
  Form {
    width: 70%;
  }
  H2 {
    text-align: center;
    padding: 15px 0;
  }
  H1 {
    text-align: center;
    padding: 20px 0;
  }
  .divider {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid black;
    margin: 10px 0 20px;
    line-height: 0.3em;
    padding-top: 15px;
  }
  .privacy {
    padding-top: 50px;
  }
  .linkContainer {
    text-align: center;
  }
  span {
    background-color: white;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    padding: 30px 0px;
    height: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  margin-left: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0px;
  }
  .left {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .right {
    @media (max-width: 768px) {
      width: 100%;
    }
    width: 50%;
    padding-left: 25px;
  }
`;
export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
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

    const { companyName, email, password } = this.state;
    axios
      .post("http://localhost:3636/users/signup", {
        companyName,
        email,
        password,
      })
      .then((response) => {
        if (response) {
          console.log(response.data);
          this.props.history.push("/signin");
        }
      });
  };

  render() {
    return (
      <Div>
        <H1>DIGIM</H1>{" "}
        <Form onSubmit={this.handleForm}>
          {" "}
          <Header>
            <H2>Create your free account today</H2>{" "}
            <H3>No contract no credit card required</H3>
          </Header>
          <FormWrapper>
            <div className='left'>
              <Input
                type='text'
                name='companyName'
                onChange={this.handleInput}
                placeholder='enter your company name'
                value={this.state.value}
              ></Input>
              <Input
                type='email'
                name='email'
                onChange={this.handleInput}
                placeholder='enter your email'
                value={this.state.value}
              ></Input>
              <Input
                type='password'
                name='password'
                onChange={this.handleInput}
                placeholder='enter your password'
                value={this.state.value}
              ></Input>
              <ButtonAscent type='submit'>Get Started</ButtonAscent>
              <p className='divider'>
                <span>OR</span>
              </p>
              <GoogleButton>Sign Up With Google</GoogleButton>
            </div>
            <div className='right'>
              <p>
                <I className='fas fa-headphones'></I>
                <Span> Customer support</Span> in 6 languages
              </p>
              <p>
                <I className='fas fa-envelope'></I>
                <Span> 70 Million Emails & SMS </Span>Sent Every Day
              </p>
              <p>
                <I className='fas fa-users'></I>
                <Span>100,000 Users </Span> in 6 languages
              </p>
              <p>
                {" "}
                <I className='fas fa-bullhorn'></I>
                <Span>Send up to 300 </Span> emails free per day
              </p>
              <p className='privacy'>
                By signing up, you are creating a DIGIM account, and you agree
                to DIGIM'S Terms of Use and Privacy Policy
              </p>
            </div>
          </FormWrapper>
        </Form>
        <div className='linkContainer'>
          <StyledLink to='/signin'>I Already have an account</StyledLink>
        </div>
      </Div>
    );
  }
}

// function mapState(state) {
//   const { registering } = state.registration;
//   return { registering };
// }
// const actionCreators = {
//   register: userActions.register,
// };
// export default connect(mapState, actionCreators)(Signup);
