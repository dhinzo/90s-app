import React from 'react'
import { Button, Header, Image, Modal, Dropdown } from 'semantic-ui-react'

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
        <Modal.Content image>
            <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
            <Modal.Description>
                <Header>Default Profile Image</Header>

            </Modal.Description>
            <Modal.Actions>
                <Button color='blue' onClick={() => setOpen(false)}>
                Register
                </Button>
                <Button
                content="Log-In"
                labelPosition='right'
                icon='checkmark'
                onClick={() => setOpen(false)}
                positive
                />
            </Modal.Actions>
        </Modal.Content>
    </Modal>
  )
}

export default ModalLoginModal