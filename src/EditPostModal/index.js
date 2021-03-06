import React, { useState } from 'react'
import { Form, Label, Button, Modal } from 'semantic-ui-react'

function EditPostModal(props) {
    const [open, setOpen] = React.useState(false)
        const initialInputState = { 
            title: props.postToEdit.title, 
            img: props.postToEdit.img, 
            description: props.postToEdit.description, 
            tags: props.postToEdit.tags 
        }

        


        const [eachEntry, setEachEntry] = useState(initialInputState)
        const { title, img, description, tags} = eachEntry

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {
        props.updatePost(eachEntry)
        setOpen(false)
        props.getUserPost()
      }



    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}                
                open={() => props.editPost(props.postToEdit.id)}
                >
            <Modal.Header>Edit Your Post</Modal.Header>
            <Form>
            <Modal.Content>
                
                <Modal.Description>
                <Label htmlFor="title">Post Title</Label>
                <Form.Input
                    name="title"
                    placeholder={title}
                    onChange={handleInputChange}
                    value={title}
                />
                <Label htmlFor="img">Image Link</Label>
                <Form.Input
                    name="img"
                    placeholder="Enter an Image URL"
                    onChange={handleInputChange}
                    value={img}
                />
                <Label htmlFor="description">Describe the nostalgia</Label>
                <Form.Input
                    name="description"
                    placeholder={description}
                    onChange={handleInputChange}
                    value={description}
                />
                <Label htmlFor="tags">#tags</Label>
                <Form.Input
                    name="tags"
                    placeholder={tags}
                    onChange={handleInputChange}
                    value={tags}
                />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => props.showUserPosts()}>
                Sike!
                </Button>
                <Button
                
                onClick={handleSubmit}
                positive
                >
                Edit Rad Post
            </Button>
            </Modal.Actions>
                </Form>  
            </Modal>
        )
}

export default EditPostModal