import React from 'react'

import { Icon, Card, Button, Image } from 'semantic-ui-react'
// import NewPostForm from '../NewPostForm'



export default function AllPostsList(props){
    const [open, setOpen] = React.useState(false)
    //console.log("Here are the props in AllPostsList: ", props);
    const allPosts = props.posts.map(post => {
    
    return(
        <Card 
            raised="true"
            key={post.id}
            medium circular>
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
                <Image
                    raised="true"
                    src={post.img}
                    onClick={() => props.showPost(post.id)}
                    medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a className="left floated">
                    <Icon name='user' />
                        {post.owner.username}
                    </a>
                    <span className="right floated">
                        <i className="heart like icon"></i>
                            {post.likes}
                    </span>  
                </Card.Content>
                <Button 
                    basic color={"red"}
                    onClick={() => props.deletePost(post.id)}>Delete</Button>
                {/*<Button
                    basic color={"yellow"}
                    onClick={() => props.editPost(post.id)}>Edit</Button>*/}
            </Card>
        )
    })
    return(
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>
    )

}
