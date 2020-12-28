import React from 'react'
import {Icon, Card, Image } from 'semantic-ui-react'


export default function AllPostsList(props){
    const allPosts = props.posts.map(post => {
    const likes = props.likes.filter(like => like.post.id === post.id)
    const likedUser = likes.filter(like => like.user.username === props.loggedInUser);
    return(
        <Card
            id="post-card"
            raised
            key={post.id} 
            onClick={() => {} }  
            medium circular>
            <Card.Content
                 textAlign={"center"}>
                <Card.Header
                    className="card-header">
                    {post.title}
                </Card.Header>
                <Card.Description
                className="card-description">
                    {post.description}
                </Card.Description>
                <Image raised true
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a className="left floated">
                    <Icon name='user' />
                        {post.owner.username}
                    </a>
                    { 
                        props.loggedIn === true
                        ?
                            likedUser.length < 1
                            ?
                            <span className="right floated">
                                <i className="heart like icon" onClick={() => props.addLike(post.id)}></i>
                                {likes.length}
                            </span>
                            :
                            <span className="right floated">
                                <i className="heart like icon redIcon" onClick={() => props.deleteLike(post.id)}></i>
                                {likes.length}
                            </span> 
                        :
                        <span className="right floated">
                            <i className="heart like icon"></i>
                            {likes.length}
                        </span>    
                    } 

                </Card.Content>
            </Card>
        )
    })
    return(
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>
    )
}