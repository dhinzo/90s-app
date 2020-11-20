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
			created_at: props.showThisPost.created_at,
			id: props.showThisPost.id
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
      					<a class="left floated">
        			<Icon name='user' />
        				{this.state.owner}
      					</a>
      					<a class="right floated">
        				<Icon name='like' />
        				{this.state.likes} likes
      					</a>
    				</Card.Content>
    				<Card.Content extra>
    					<div class="ui large transparent left icon input left floated">
      						<i class="heart outline icon"></i>
      						<input type="text" placeholder="Add Comment..."/>
    					</div>
    				</Card.Content>
	    			<Button onClick={this.props.closeShowModal}>Back</Button>
					<Button 
						color="red"
						onClick={() => this.props.deletePost(this.state.id)}>Delete
						</Button>
	    		</Card>
			</Segment>
		)
	}
}