import React, { useState } from 'react'
import { Button, Modal, Form, Segment } from 'semantic-ui-react'



export default function RegisterModal(props) {
    const [open, setOpen] = React.useState(false)
    const intialInputState = {username: '', password: ''}
    const [eachEntry, setEachEntry] = useState(intialInputState)
    const {username, password} = eachEntry
   
    const handleClose = () => {
      setOpen(false)
      setEachEntry('')
    }

    const handleInputChange = (e) =>{
      setEachEntry({ ...eachEntry, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      props.register(eachEntry)
      setEachEntry('')
      setOpen(false)
    }


  return (
    <Modal
        closeOnDimmerClick={false}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button
                    basic
                    color="grey"
                    compact
                    size="small"
                    >Register</Button>}
        >
        <Modal.Header id='login-header'>Register
            <Button
                compact
                id='header-close'
                icon='x'
                floated='right'
                size='tiny'
                onClick={handleClose}
                />
        </Modal.Header>
        <Modal.Content className='modal-body'>
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
