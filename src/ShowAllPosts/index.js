import React from 'react'
import {Icon, Card, Image } from 'semantic-ui-react'


export default function AllPostsList(props){
    console.log(props);
    const allPosts = props.posts.map(post => {
    // console.log(post);
    const likes = props.likes.filter(like => like.post.id === post.id)
    // console.log(likes);
    // console.log(props.loggedInUser);
    // const likedUser = props.likes.filter(like => like.user.username === props.loggedInUser )
    const likedUser = likes.filter(like => like.user.username === props.loggedInUser);
    // console.log(likedUser);
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
                <Card.Description>
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