import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'
export default class PostToShow extends Component {
	constructor(props) {
		super(props)
		console.log("These are the props in posts to show", props)
		this.state = {
			title: props.showThisPost.title,
			img: props.showThisPost.img,
			description: props.showThisPost.description,
			likes: props.showThisPost.likes,
			owner: props.showThisPost.owner,
			tags: props.showThisPost.tags,
			created_at: props.showThisPost.created_at
		}
	}
	render() {
		return(
			<Segment> 
  				<Card>
    				<Image 
    					src={this.state.img} alt="90s pic"/>
	    			<Card.Content>
	    				<Card.Header>{this.state.title}</Card.Header>
	    				<Card.Meta>
        					<span className='date'>{this.state.created_at}</span>
        				</Card.Meta>
	    			<Card.Description>
	    				{this.state.description}
	    			</Card.Description>
	    			</Card.Content>
	    			<Card.Content extra>
      					<a>
        			<Icon name='user' />
        				{this.state.owner}
      					</a>
      					<a>
        				<Icon name='like' />
        				{this.state.likes}
      					</a>
    				</Card.Content>
	    			<Button type="Submit" onClick={this.props.closeShowModal}>Back</Button>
	    		</Card>
			</Segment>
		)
	}
}