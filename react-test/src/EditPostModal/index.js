import React, { useState } from 'react'
import { Form, Label, Button, Modal } from 'semantic-ui-react'

function EditPostModal(props) {
    console.log("these are the props in editpostmodal: ", props)
    // state for modal
    const [open, setOpen] = React.useState(false)
        // variables for useState (form fields and their respective current state values)
        const initialInputState = { title: props.thisPostToEdit.title, img: props.thisPostToEdit.img, description: props.thisPostToEdit.description, likes: props.thisPostToEdit.likes, owner: props.thisPostToEdit.owner, tags: props.thisPostToEdit.tags }

        


        const [eachEntry, setEachEntry] = useState(initialInputState)
        const { title, img, description, likes, owner, tags} = eachEntry

    const handleInputChange = e => {
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {
        props.updatePost(eachEntry)
        setOpen(false)
      }



    return (
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button 
                            basic
                            color={"yellow"}>Edit Post</Button>}
                >
            <Modal.Header>Edit Your Post</Modal.Header>
            <Form>
            <Modal.Content>
                
                <Modal.Description>
                <Label htmlFor="title">Post Title</Label>
                <Form.Input
                    name={title}
                    placeholder={title}
                    onChange={handleInputChange}
                    value={title}
                />
                <Label htmlForr="img">Image Link</Label>
                <Form.Input
                    name={img}
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
                <Button color='black' onClick={() => setOpen(false)}>
                Sike!
                </Button>
                <Button
                content="Create Rad Post"
                labelPosition='right'
                icon='checkmark'
                onClick={handleSubmit}
                positive
                >
                Create Rad Post
            </Button>
            </Modal.Actions>
                </Form>  
            </Modal>
        )
}

export default EditPostModal
