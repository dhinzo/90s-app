import React, { Component } from 'react'
import { Form, Button, Label, Segment} from 'semantic-ui-react'

export default class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (event) =>{
        console.log(this.props.users);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        //lifting up state
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }
    render() {
        return(
            <Segment>
                <h4>Sign In</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Username:</Label>
                    <Form.Input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="Enter username"
                    onChange={this.handleChange}
                    />
                      <Label>Password:</Label>
                    <Form.Input 
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    />
                    
                    <Button type="Submit">Login</Button>
                </Form>
            </Segment>
        )
    }
}