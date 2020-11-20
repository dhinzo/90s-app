import React from 'react'

import { Modal, Icon, Card, Button, Image, Label } from 'semantic-ui-react'
import NewPostForm from '../NewPostForm'



export default function AllPostsList(props){
    const [open, setOpen] = React.useState(false)
    console.log(props);
    const allPosts = props.posts.map(post => {
    return(
        <Card raised key={post.id} onClick={post.id}  medium circular>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                <Card.Description>
                    {post.owner}
                </Card.Description>
                <Image raised
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a class="left floated">
                    <Icon name='user' />
                        {post.owner}
                    </a>
                    <span class="right floated">
                        <i class="heart like icon"></i>
                            {post.likes}
                    </span>  
                </Card.Content>
                <Button 
                    basic color={"red"}
                    onClick={() => props.deletePost(post.id)}>Delete</Button>
            </Card>
        )
    })
    return(
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>
    )

}