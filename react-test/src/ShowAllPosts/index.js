import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import ModalExampleModal from '../ShowPost'




export default function AllPostsList(props){
 
    const allPosts = props.posts.map(post => {
    
    return(
        <React.Fragment>
        <Card key={post.id} color={"red"}>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
                <Image
                    src={post.img}/> 
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                <Card.Description>
                   
                    
                </Card.Description>
                <Label>
                    {post.tags}
                </Label>
            </Card.Content>
        </Card>
       
    </React.Fragment>
    )
})
    return(
        <Card.Group centered={true}>
            {allPosts}
        </Card.Group>
    )

}
