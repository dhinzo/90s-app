import React from 'react'
import { Button, Modal } from 'semantic-ui-react'


function LoginError() {
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
            The Username and Password do not match one another. Please try again. If you do not have an account, please Register. 
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

export default LoginError