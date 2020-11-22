import React, { Component } from 'react'
import {Form, Button, Segment, Label} from 'semantic-ui-react'

export default class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.postToEdit.title,
            img: props.postToEdit.img,
            description: props.postToEdit.description,
            tags: props.postToEdit.tags,
            likes: props.postToEdit.likes,
            owner: props.postToEdit.owner
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
        this.props.updatePost(this.state)
        this.setState({
            title: '',
            img: '',
            description: '',
            tags: ''
        })
    }
    render() {
        const linkStyle = {
            cursor: "pointer",
            color: "blue",
            textDecoration: "underline" 
        }
        return (
            <div>
                <Segment>
                <h4>Edit Post</h4>
                <p style={linkStyle} onClick={this.props.closeEditModal}><small>close</small></p>
                <Form onSubmit={this.handleSubmit}>
                    <Label>Title:</Label>
                    <Form.Input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    placeholder={this.state.title}
                    onChange={this.handleChange}
                    />
                    <Label>Image URL:</Label>
                    <Form.Input 
                    type="text"
                    name="img"
                    value={this.state.img}
                    placeholder={this.state.img}
                    onChange={this.handleChange}
                    />
                    <Label>Description:</Label>
                    <Form.Input 
                    type="text"
                    name="description"
                    value={this.state.description}
                    placeholder={this.state.description}
                    onChange={this.handleChange}
                    />
                    <Label>Tags:</Label>
                    <Form.Input 
                    type="text"
                    name="tags"
                    value={this.state.tags}
                    placeholder={this.state.tags}
                    onChange={this.handleChange}
                    />
                    
                    <Button type="Submit">Create Post</Button>
                </Form>
            </Segment>
            </div>
        )
    }
}
