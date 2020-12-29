import React from 'react'
import { Button, Modal } from 'semantic-ui-react'


function RegistrationError(props) {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
    <Modal.Header id='login-error-header'>Error Logging In</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p id="login-error-text">
            That username is already taken. Please choose another and try again.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => setOpen(false)}>Ok.</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default RegistrationError