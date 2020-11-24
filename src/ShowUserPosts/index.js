import React from 'react'
import EditPostModal from '../EditPostModal'
import {Icon, Card, Button, Image } from 'semantic-ui-react'





export default function AllUserPostsList(props){
    // const [open, setOpen] = React.useState(false)
    console.log("These are the props in AllUserPosts: ", props);
    const allPosts = props.userPosts.map(post => {
    const likes = props.likes.filter(like => like.post.id === post.id)
    return(
        <Card
            id="post-card"
            raised
            key={post.id}
            onClick={() => {} }
            medium 
            circular>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Card.Description>
                    {post.description}
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
                            {likes.length}
                    </span>  
                </Card.Content>
                <Button 
                    inverted
                    color="red"
                    onClick={() => props.deletePost(post.id)}>Delete</Button>
                {/*WHY ARE THESE UNDEFINED?*/}
                <Button
                    inverted
                    color="yellow"
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