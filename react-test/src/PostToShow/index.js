import React, { Component } from 'react'
import { Card, Icon, Image, Segment, Button } from 'semantic-ui-react'

export default function PostToShow(props){
	// console.log("Here are the props in PostToShow: ", props)
	
		return(
			<Segment> 
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
					{
						props.state.loggedIn === true
						&&
					<Button 
						color="red"
						onClick={() => props.deletePost(props.showThisPost.id)}>Delete
						</Button>
					}
	    		</Card>
			</Segment>
		)
	
}