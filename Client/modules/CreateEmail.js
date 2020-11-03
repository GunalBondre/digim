import React, { Component } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";

const EmailWrapper = styled.div``;
export default class CreateEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaignName: "",
      campaignSubject: "",
      campaignBody: "",
      campaignFrom: "",
      campaignMailids: "",
    };
  }
  handleInput = () => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleForm = () => {};
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <EmailWrapper>
              <Form onSubmit={this.handleForm}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Campaign Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Campaign Name'
                    name='campaignName'
                    onChange={this.handleInput}
                    value={this.state.value}
                    required
                  />
                  <Form.Text className='text-muted'>
                    Give your campaign an internal name to help organize and
                    locate it easily within your account. For example:
                    'Sale_October'
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Subject Line</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Subject Line'
                    name='campaignSubject'
                    required
                  />
                  <Form.Text className='text-muted'>
                    Write a subject line that clearly describes your email
                    content. It will be visible in your recipient's inbox and is
                    the first content they will see. For example: 'Private sale:
                    25% off our new collection
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Campaign Body</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Your Message'
                    name='campaignBody'
                    required
                  />
                  Write the email content that you want to send
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>From Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='From Email'
                    name='campaignFrom'
                    required
                  />
                  Write your email
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Paste Email Ids to Send</Form.Label>
                  <Form.Control as='textarea' rows={3} name='campaignMailids' />
                </Form.Group>

                <Button variant='primary' type='submit' name='submit'>
                  Submit
                </Button>
              </Form>
            </EmailWrapper>
          </div>
        </div>
      </div>
    );
  }
}
