import React, { Component } from 'react'
import { Card, Icon, Image, Button, Segment } from 'semantic-ui-react'
export default function PostToShow(props){
	// console.log("Here are the props in PostToShow: ", props)
	const likes = props.likes.filter(like => like.post.id === props.showThisPost.id)
		return(
			<Segment id="show-modal">
				<Card
				
				raised
				styles="box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);"
				centered={true}
				>
    				<Image raised true
    					src={props.showThisPost.img} alt="90s pic" medium circular/>
	    			<Card.Content className="post-content-background">
	    				<Card.Header className="card-header">{props.showThisPost.title}</Card.Header>
	    				
	    			<Card.Description className="card-description">
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
		)
}