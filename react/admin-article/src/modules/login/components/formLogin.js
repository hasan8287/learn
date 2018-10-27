import React from 'react'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Field, reduxForm } from 'redux-form'

const GatorForm = ({ handleSubmit }) => {
  // return (
  //   <form onSubmit={handleSubmit(val => console.log(val))}>
  //     <label htmlFor="first-name">Your first name:</label>
  //     <Field
  //       name="firstName"
  //       type="text"
  //       component="input"
  //       id="first-name"
  //       placeholder="Benedict"
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  return (
    <Form>
      <h1>Login</h1>
      <p className="text-muted">Sign In to your account</p>
      <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-user"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Field
          name="username"
          type="text"
          component="input"
          id="username"
          placeholder="username"
        />
        {/* <Input type="text" placeholder="Username" autoComplete="username" /> */}
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="icon-lock"></i>
          </InputGroupText>
        </InputGroupAddon>
        <Input type="password" placeholder="Password" autoComplete="current-password" />
      </InputGroup>
      <Row>
        <Col xs="6">
          <Button color="primary" className="px-4">Login</Button>
        </Col>
        <Col xs="6" className="text-right">
          <Button color="link" className="px-0">Forgot password?</Button>
        </Col>
      </Row>
    </Form>
  )
};

export default reduxForm({
  form: 'gatorForm'
})(GatorForm);
