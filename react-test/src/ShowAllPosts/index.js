import React from 'react'

import {Icon, Card, Button, Image } from 'semantic-ui-react'




export default function AllPostsList(props){
    const [open, setOpen] = React.useState(false)
    console.log(props);
    const allPosts = props.posts.map(post => {
    console.log(post);
    const likes = props.likes.filter(like => like.post.id === post.id)
    console.log(likes);
    console.log(props.loggedInUser);
    // const likedUser = props.likes.filter(like => like.user.username === props.loggedInUser )
    const likedUser = likes.filter(like => like.user.username === props.loggedInUser);
    console.log(likedUser);
    
    return(
        <Card raised key={post.id} onClick={() => {} }  medium circular>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                <Card.Description>
                   {post.owner.username}
                    
                </Card.Description>
                <Image raised true
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a class="left floated">
                    <Icon name='user' />
                        {post.owner.username}
                    </a>
                    { 
                        likedUser < 1 && props.loggedIn === true
                        ?
                    <span class="right floated">
                        <i class="heart like icon" onClick={() => props.addLike(post.id)}></i>
                            {likes.length}
                    </span>
                        :
                        <span class="right floated">
                        <i class="heart like icon"></i>
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

