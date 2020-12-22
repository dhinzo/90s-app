// import React from 'react'
import { Form, Label, Button, Modal } from 'semantic-ui-react'
import React, {useState} from 'react'

export default function NewPostModal(props) {
  const [open, setOpen] = React.useState(false)
    const initialInputState = { title: '', img: '', description: '', likes: 0, owner: '', tags: '' }
    const [eachEntry, setEachEntry] = useState(initialInputState)
    const { title, img, description, tags} = eachEntry
  
  const handleInputChange = e => {
  setEachEntry({ ...eachEntry, [e.target.name]: e.target.value })
}

  const handleSubmit = e => {
    e.preventDefault()
    props.createPost(eachEntry)
    setOpen(false)
    setEachEntry(initialInputState)
  } 

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button
                  basic
                  color="grey"
                  compact>Create Throwback</Button>}
    >
      <Modal.Header>Create New Post</Modal.Header>
    <Form>
      <Modal.Content>
        
        <Modal.Description>
          <Label htmlFor="title">Post Title</Label>
          <Form.Input
            name="title"
            placeholder="Post Title"
            onChange={handleInputChange}
            value={title}
          />
          <Label htmlForr="img">Image Link</Label>
          <Form.Input
            name="img"
            placeholder="Enter an Image URL"
            onChange={handleInputChange}
            value={img}
          />
          <Label htmlFor="description">Describe the nostalgia</Label>
          <Form.Input
            name="description"
            placeholder="Remember when..."
            onChange={handleInputChange}
            value={description}
          />
          <Label htmlFor="tags">#tags</Label>
          <Form.Input
            name="tags"
            placeholder="enter tags"
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