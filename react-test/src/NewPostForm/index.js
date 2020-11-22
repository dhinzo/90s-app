import React, { Component } from 'react'
import { Form, Button, Label, Segment} from 'semantic-ui-react'

export default class NewPostForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            img: '',
            description: '',
            likes: 0,
            owner: props.loggedInUser,
            tags: []

        }
    }
    handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        //lifting up state
        this.props.createPost(this.state)
        this.setState({
            title: '',
            img: '',
            description: '',
            likes: 0,
            owner: '',
            tags: ''
        })
    }
    render() {
        return (
            <Segment>
                <h4>Post:</h4>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Title:</Label>
                    <Form.Input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.handleChange}
                    />
                    <Label>Image URL:</Label>
                    <Form.Input 
                    type="text"
                    name="img"
                    value={this.state.img}
                    placeholder="Image URL"
                    onChange={this.handleChange}
                    />
                    <Label>Description:</Label>
                    <Form.Input 
                    type="text"
                    name="description"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={this.handleChange}
                    />
                    {/*<Label>Owner:</Label>
                    <Form.Input 
                    type="text"
                    name="owner"
                    value={this.state.owner}
                    placeholder="owner"
                    onChange={this.handleChange}*/}
                    /><Label>Tags:</Label>
                    <Form.Input 
                    type="text"
                    name="tags"
                    value={this.state.tags}
                    placeholder="tags"
                    onChange={this.handleChange}
                    />
                    
                    <Button type="Submit">Create Post</Button>
                </Form>
            </Segment>
        )
    }
}