import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import LoginModal from '../LoginContainer'
import RegisterModal from '../RegisterContainer'

function LoginError(props) {
  const [open, setOpen] = React.useState(true)

  return (
    <Modal
    size="mini"
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    >
      <Modal.Header id='login-error-header'>Error Logging In
            <Button
                compact
                icon='x'
                floated='right'
                size='mini'
                onClick={() => props.closeErrorModals()}
                />
        </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p id="login-error-text">
            The Username and Password do not match one another. If you do not have an account, please Register. Otherwise, try again.
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <LoginModal
        id="error-login-modal"
        login={props.login}
        />
        <RegisterModal
        id="error-reg-modal"
        login={props.login}
        register={props.register}
        />
      </Modal.Actions>
    </Modal>
  )
}

export default LoginError