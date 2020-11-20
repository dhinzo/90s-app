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
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button 
            content='Sign On'
            color='blue'
            primary
            onClick={() => setOpen(false)}
            positive 
          />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
        </Modal.Content>
    </Modal>
  )
}

export default ModalLoginModal