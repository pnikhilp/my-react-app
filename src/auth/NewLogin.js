import React, { Component } from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import "./NewLogin.css";
export default class NewLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitForm = event => {
    const {history} = this.props;
    event.preventDefault();
    localStorage.setItem('token', '12345')
    history.push('/');
  };

  validateForm = () => {
    return (this.state.email.length > 0) & (this.state.password.length > 0);
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.submitForm}>
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            bsStyle="primary"
            type="submit"
            disabled={!this.validateForm}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
