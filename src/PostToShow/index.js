import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'
export default function PostToShow(props){
	// console.log("Here are the props in PostToShow: ", props)
	const likes = props.likes.filter(like => like.post.id === props.showThisPost.id)
		return(
			<div id='show-container'>
			<Segment id='show-modal'> 
				  <Card
				  id="post-card" 
				  styles="box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);"
				  floated='center'
				  >
    				<Image 
    					src={props.showThisPost.img} alt="90s pic"/>
	    			<Card.Content>
	    				<Card.Header id='post-title'>{props.showThisPost.title}</Card.Header>
	    				<Card.Meta id='post-timestamp'>
        					<span className='date'>{props.showThisPost.created_at}</span>
        				</Card.Meta>
	    			<Card.Description id='post-description'>
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
        				{likes.length}
      					</a>
    				</Card.Content>
	    			<Button id='back-button' onClick={props.closeShowModal}>Back</Button>
	    			
					
	    		</Card>
			</Segment>
			</div>
		)
}