import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'

export default function PostToShow(props){
	// console.log("Here are the props in PostToShow: ", props)
	
		return(
			<Segment> 
  				<Card>
    				<Image 
    					src={props.showThisPost.img} alt="90s pic"/>
	    			<Card.Content>
	    				<Card.Header>{props.showThisPost.title}</Card.Header>
	    				<Card.Meta>
        					<span className='date'>{props.showThisPost.created_at}</span>
        				</Card.Meta>
	    				<Card.Description>
	    					{this.state.description}
	    				</Card.Description>
	    			</Card.Content>
	    			<Card.Content extra>
      					<a className="right floated">
        				<Icon name='user' />
        				{this.state.owner}
      					</a>
      					<a className="left floated">
	    			<Card.Description>
	    				{props.showThisPost.description}
	    			</Card.Description>
	    			</Card.Content>
	    			<Card.Content extra>
      					<a className="left floated">
        			<Icon name='user' />
        				{props.showThisPost.owner}
      					</a>
      					<a className="right floated">
        				<Icon name='like' />
        				{props.showThisPost.likes} likes
      					</a>
    				</Card.Content>
    				<Card.Content extra>
    					<div className="ui large transparent left icon input left floated">
      						<i className="heart outline icon"></i>
      						<input type="text" placeholder="Add Comment..."/>
    					</div>
    				</Card.Content>
	    			<Button onClick={props.closeShowModal}>Back</Button>
					<Button 
						color="red"
						onClick={() => this.props.deletePost(this.state.id)} >Delete</Button>
	    		</Card>
			</Segment>
		)
	
}