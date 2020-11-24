import React from 'react'
import EditPostModal from '../EditPostModal'
import {Icon, Card, Button, Image } from 'semantic-ui-react'





export default function AllUserPostsList(props){
    // const [open, setOpen] = React.useState(false)
    console.log("These are the props in AllUserPosts: ", props);
    const allPosts = props.userPosts.map(post => {
    
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
                <Image raised
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
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
                {/*WHY ARE THESE UNDEFINED?*/}
                <Button
                    basic color={"yellow"}
                    onClick={() => props.editPost(post.id)}>Edit</Button>
            </Card>
        )
    })
    return(
        <React.Fragment>
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>

        </React.Fragment>
    )

}