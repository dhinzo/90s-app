import React from 'react'
import { Container, Menu, Button } from 'semantic-ui-react'
import LoginModal from '../LoginContainer'
import NewPostModal from '../NewPostModal'
import RegisterModal from '../RegisterContainer'



const UserNav = (props) => (


  <React.Fragment>
    <Menu
      position='left' 
      fixed='top' inverted>
      <Container>
        <Menu.Item 
        header id='nav-title'
        onClick={() => props.showAllPosts()}>   
          That 90s App!
        </Menu.Item>
        {
          props.loggedIn === true
          ?
          <React.Fragment>
          <NewPostModal
            createPost={props.createPost} />
        <Button
          className="nav-btns"
          basic
          color="grey"
          compact
           onClick={() => props.showAllPosts()}>Home</Button> 
          <Button
            className="nav-btns"
            basic
            color="grey"
            compact 
            onClick={() => props.showUserPosts()}>My Posts</Button>
        <Menu.Menu position="right">
          <Button
            className="nav-btns"
            id="logout-btn"
            basic
            color="grey"
            compact
            onClick={() => props.logout()}>Log Out</Button>
          </Menu.Menu>
        </React.Fragment>
        :   
        <React.Fragment>
        <Menu.Menu position="right">  
        <LoginModal
          
          id="login-modal"
          login={props.login}
          errorModal={props.errorModal}
           />
        <RegisterModal
          id="reg-modal"
          login={props.login}
          register={props.register}
          
          />
          </Menu.Menu>    
          </React.Fragment>
        } 
      </Container>
    </Menu>   
    </React.Fragment>
)

export default UserNav