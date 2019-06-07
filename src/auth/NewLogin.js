import React, { Component } from "react";
// import { FormGroup, FormControl, Button } from "react-bootstrap";
import {
  //  Field, 
  reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStreams } from '../actions';
import StreamCreate from '../components/streams/StreamCreate';
import "./NewLogin.css";
// import StreamList from "../components/StreamList";
class NewLogin extends Component {
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
    // const {history} = this.props;
    // event.preventDefault();
    // localStorage.setItem('token', '12345')
    // history.push('/');
    console.log('EVENT:::::', event);
  };

  validateForm = () => {
    return (this.state.email.length > 0) & (this.state.password.length > 0);
  };

  renderInput = ({ input, label }) =>{
    return(
      <div className='field'>
        <label>{label}</label>
        <input />
      </div>
    )
  }

  renderField = ({ input,label,type, meta: { asyncValidating, touched, error }}) => (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )

  handleSubmit = () => {
    console.log('submit')
    this.props.createStreams({"name": "nikhil", "id": 1234})
  }

  render() {
    console.log(this.props);
    return (
      <div className="Login">
      <StreamCreate />
      {/* <StreamList /> */}
        {/* <form onSubmit={this.submitForm} className='ui form'>
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
        </form> */}
        {/* <form onSubmit={this.handleSubmit}>
      <Field
        name="username"
        type="text"
        component={this.renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={this.renderField}
        label="Password"
      />
      <div>
        <button type="submit" 
        // disabled={submitting}
        >
          Sign Up
        </button>
        <button type="button" 
        // disabled={pristine || submitting} onClick={reset}
        >
          Clear Values
        </button>
      </div>
    </form> */}
      </div>
    );
  }
}
const formWrapped = reduxForm({
  form: 'loginForm'
})(NewLogin);

export default connect(null, { createStreams })(formWrapped);