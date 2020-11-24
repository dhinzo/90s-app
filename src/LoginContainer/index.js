import React, { useState } from 'react'
import { Button, Header, Image, Modal, Divider, Form, Grid, Segment } from 'semantic-ui-react'




export default function LoginModal(props) {
    const [open, setOpen] = React.useState(false)
    const intialInputState = {username: '', password: ''}
    const [eachEntry, setEachEntry] = useState(intialInputState)
    const {username, password} = eachEntry
   
     const handleInputChange = (e) =>{
        setEachEntry({ ...eachEntry, [e.target.name]: e.target.value})
    }
     const handleSubmit = (e) =>{
        e.preventDefault()
        //lifting up state
        props.login(eachEntry)
        setOpen(false)
    }


  return (
    <Modal
        onClose={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                />
        </Modal.Header>
        <Modal.Content>
        <Segment className='layer' placeholder>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            name = 'username'
            onChange = {handleInputChange}
            value = {username}
            placeholder='Username'
            autocomplete='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            name = 'password'
            onChange = {handleInputChange}
            value = {password}
            type='password'
            autocomplete='current-password'
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

