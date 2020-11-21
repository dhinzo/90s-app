import React from 'react'

import { Modal, Icon, Card, Button, Image, Label } from 'semantic-ui-react'
import NewPostForm from '../NewPostForm'



export default function AllPostsList(props){
    const [open, setOpen] = React.useState(false)
    console.log(props);
    const allPosts = props.posts.map(post => {
    return(
        <Card raised key={post.id} onClick={()=> {}}  medium circular>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                
                <Image raised
                    src={post.img} onClick={ ()=> props.showPost(post.id)} medium circular />
            </Card.Content>
                <Card.Content extra>
                    <a className="right floated" onClick={() =>{}}>
                    <Icon className='trash' onClick={() => props.deletePost(post.id)}/>
                    <Icon className='user' />
                        {post.owner}
                    
                    </a>
                    <span className="left floated">
                        <i className="heart like icon"  onClick={() => props.addLike(post.id)}></i>
                            {post.likes}
                    </span>  
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