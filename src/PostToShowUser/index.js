import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'

export default function PostToShowUser(props){
	// console.log("Here are the props in PostToShow: ", props)
	// const likes = props.likes.filter(like => like.post.id === props.showThisPost.id)
		return(
			<div id='show-container'>
			<Segment id='show-modal'> 
  				<Card styles="box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);">
    				<Image 
    					src={props.showThisPost.img} alt="90s pic"/>
	    			<Card.Content>
	    				<Card.Header>{props.showThisPost.title}</Card.Header>
	    				<Card.Meta>
        					<span className='date'>{props.showThisPost.created_at}</span>
        				</Card.Meta>
	    			<Card.Description>
	    				{props.showThisPost.description}
	    			</Card.Description>
	    			</Card.Content>
	    			<Card.Content extra>
      					<a className="left floated">
        			<Icon name='user' />
        				{props.showThisPost.owner.username}
      					</a>
      					<a className="right floated">
        				<Icon name='like' />
        				{props.likes} 
      					</a>
    				</Card.Content>
	    			<Button
						id="back-button"
						onClick={props.closeShowModal}>Back</Button>
					
	    		</Card>
			</Segment>
			</div>
		)
	
}