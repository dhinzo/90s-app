import React from 'react'
import { Button, Header, Image, Modal, Divider, Form, Grid, Segment } from 'semantic-ui-react'



function ModalLoginModal() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Sign On</Button>}
        >
        <Modal.Header id='login-header'>Sign On
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
            placeholder='Username'
            autocomplete='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            autocomplete='current-password'
          />

          <Button 
            content='Sign On'
            color='#0E6EB8'
            primary
            onClick={() => setOpen(false)}
            positive 
          />
        </Form>

  </Segment>
        </Modal.Content>
    </Modal>
  )
}

export default ModalLoginModal