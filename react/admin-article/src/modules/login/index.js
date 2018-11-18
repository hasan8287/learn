import React, { Component } from 'react';

export default () => {
  return <Redirect to='/users'  />
}
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import  { Redirect } from 'react-router-dom'
// import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

// import { loginProcess } from './../actions/account'

// class Login extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       login: props.login,
//       err: props.err,
//       data: props.data,
//       edit: {
//         username: '',
//         password: '',
//       },
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.login = this.login.bind(this);
//   }

//   handleChange(event) {
//     const { edit } = this.state;
//     edit[event.target.name] = event.target.value;
//     this.setState({ edit });
//   }

//   login() {
//     return this.props.loginProcess(this.state.edit)
//   }

//   setLocalStorege() {
//     return localStorage.setItem('admin', JSON.stringify(this.props.data));
//   }

//   render() {
//     const { edit } = this.state;
//     const cachedHits = localStorage.getItem('admin');
//     if (cachedHits) {
//       this.setLocalStorege()
//       return <Redirect to='/users'  />
//     }

//     return (
//       <div className="app flex-row align-items-center">
//         <Container>
//           <Row className="justify-content-center">
//             <Col md="4">
//               <CardGroup>
//                 <Card className="p-4">
//                   <CardBody>
//                     <Form method="post">
//                       <h1>Login {this.props.err}</h1>
//                       <p className="text-muted">Sign In to your account</p>
//                       <InputGroup className="mb-3">
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                             <i className="icon-user"></i>
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input
//                           type="text"
//                           placeholder="Username"
//                           value={edit.username}
//                           autoComplete="username"
//                           onChange={this.handleChange}
//                           name="username"
//                         />
//                       </InputGroup>
//                       <InputGroup className="mb-4">
//                         <InputGroupAddon addonType="prepend">
//                           <InputGroupText>
//                             <i className="icon-lock"></i>
//                           </InputGroupText>
//                         </InputGroupAddon>
//                         <Input
//                           name="password"
//                           type="password"
//                           value={edit.password}
//                           placeholder="Password"
//                           autoComplete="current-password"
//                           onChange={this.handleChange}
//                         />
//                       </InputGroup>
//                       <Row>
//                         <Col xs="6">
//                           <Button
//                             color="primartest"
//                             className="px-4"
//                             onClick={this.login}
//                           >
//                             Login
//                           </Button>
//                         </Col>
//                       </Row>
//                     </Form>
//                   </CardBody>
//                 </Card>
//               </CardGroup>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ counter }) => ({
//   ...counter,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   loginProcess,
//   changePage: () => push('/users')
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login)

