import React, { Component } from 'react';
import {Form, Button, Label} from 'semantic-ui-react'; 

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }
  handleChange = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse)
    if(parsedResponse.status.message === 'User Logged In'){
      this.props.history.push('/employees');
    }

  }
  render(){
  return (
    <div>
    <Form onSubmit={this.handleSubmit}>
      <Label>
        Username:
        <Form.Input type="text" name="username" onChange={this.handleChange}/>
      </Label>
      <Label>
        Password:
        <Form.Input type="password" name="password" onChange={this.handleChange}/>
      </Label>
      <Button type="submit">Login</Button>
    </Form>
    </div>
    )
  }
}

export default Login;