import React from 'react'
<<<<<<< HEAD
import { Card, Button } from 'semantic-ui-react'
=======
import { Card, Image, Label } from 'semantic-ui-react'
>>>>>>> 470d6a7c6136a5cf57cb58836fd7a5daeaaa3e1b


export default function AllPostsList(props){
    console.log(props);
    const allPosts = props.posts.map(post => {
    return(
        <Card key={post.id} color={"red"}>
            <Card.Content textAlign={"center"}>
                <Card.Header>
                    {post.title}
                </Card.Header>
<<<<<<< HEAD
=======
                <Image
                    src={post.img}/>
>>>>>>> 470d6a7c6136a5cf57cb58836fd7a5daeaaa3e1b
                <Card.Meta>
                    {post.description}
                </Card.Meta>
                <Card.Description>
                    {post.owner}
                </Card.Description>
<<<<<<< HEAD
=======
                <Label>
                    {post.tags}
                </Label>
>>>>>>> 470d6a7c6136a5cf57cb58836fd7a5daeaaa3e1b
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