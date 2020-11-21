import React, { useState } from 'react'
import { Button, Header, Image, Modal, Divider, Form, Grid, Segment } from 'semantic-ui-react'



export default function RegisterModal(props) {
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
        props.register(eachEntry)
        // props.login(eachEntry)
        setOpen(false)
    }


  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Register</Button>}
        >
        <Modal.Header id='login-header'>Register
            <Button

                id='header-close'
                icon='x'
                floated='right'
                size='mini'
                onClick={() => setOpen(false)}
                />
        </Modal.Header>
        <Modal.Content class='modal-body'>
        <Segment placeholder>

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
            content='Register'
            color='#0E6EB8'
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
