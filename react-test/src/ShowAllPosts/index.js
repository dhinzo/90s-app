import React from 'react'
import { Card } from 'semantic-ui-react'


export default function AllPostsList(props){
    console.log(props);
    const allPosts = props.posts.map(post => {
    return(
        <Card key={post.id} color={"red"}>
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