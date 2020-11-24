import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'
export default function PostToShow(props){
	// console.log("Here are the props in PostToShow: ", props)
		return(
			<div id='show-container'>
			<Segment id='show-modal'> 
				  <Card 
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
        				{props.showThisPost.likes} likes
      					</a>
    				</Card.Content>
    				<Card.Content extra>
    					<div className="ui large transparent left icon input left floated">
      						<i className="heart outline icon"></i>
      						<input type="text" placeholder="Add Comment..."/>
    					</div>
    				</Card.Content>
	    			<Button id='back-button' onClick={props.closeShowModal}>Back</Button>
					
	    		</Card>
			</Segment>
			</div>
		)
}