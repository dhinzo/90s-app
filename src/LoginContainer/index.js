import React, { useState } from 'react'
import { Button, Modal, Form, Segment } from 'semantic-ui-react'




export default function LoginModal(props) {
    const [open, setOpen] = React.useState(false)
    const intialInputState = {username: '', password: ''}
    const [eachEntry, setEachEntry] = useState(intialInputState)
    const {username, password} = eachEntry
    
    const handleClose = () => {
      setOpen(false)
      setEachEntry(intialInputState)
    }

    const handleInputChange = (e) =>{
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value})
    }


     const handleSubmit = (e) =>{
      e.preventDefault()
      props.login(eachEntry)
      setEachEntry(intialInputState)
      setOpen(false)      
    }
  return (
    <Modal
        onClose={() => setOpen(false)}
        closeOnDimmerClick={false}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button
                    basic
                    color="grey"
                    compact
                    size="small">Sign On</Button>}
        >
        <Modal.Header id='login-header'>Sign On
            <Button
                compact
                id='header-close'
                icon='x'
                floated='right'
                size='tiny'
                onClick={handleClose}
                />
        </Modal.Header>
        <Modal.Content>
        <Segment className='layer' placeholder>
        <Form>
          <Form.Input
            label="Username"
            icon='user'
            iconPosition='left'
            name='username'
            onChange={handleInputChange}
            value={username}
            placeholder='Username'
            
          />
          
          <Form.Input
            label="Password"
            icon='lock'
            iconPosition='left'
            name='password'
            onChange={handleInputChange}
            value={password} 
            type='password'
            
          />

          <Button
            className='sign-in-button'
            content='Sign On'
            color='blue'
            primary
            onClick={handleSubmit}
            positive 
          />
        </Form>

  </Segment>
        </Modal.Content>
    </Modal>
  )
}
