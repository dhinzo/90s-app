import React from 'react'
import {Icon, Card, Button, Image } from 'semantic-ui-react'


export default function AllPostsList(props){
    const [open, setOpen] = React.useState(false)
    console.log(props);
    const allPosts = props.posts.map(post => {
    console.log(post)
    const likes = props.likes.filter(like => like.post.id === post.id)
    console.log(likes)
    return(
        <Card raised key={post.id} onClick={()=> {}}  medium circular>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                <Card.Description>
                </Card.Description>
                <Image raised true
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a className="right floated">
                    <Icon name='user' />
                        {post.owner.username}
                    </a>
                    <span className="left floated">
                        <i className="heart like icon" onClick={() => props.addLike(post.id)}></i>
                            {likes.length}
                    </span>  
                </Card.Content>
                <Button 
                    basic color={"red"}
                    onClick={() => props.deletePost(post.id)}>Delete</Button>
                <Button
                    basic color={"yellow"}
                    onClick={() => props.editPost(post.id)}>Edit</Button>
            </Card>
        )
    })
    return(
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>
    )
}