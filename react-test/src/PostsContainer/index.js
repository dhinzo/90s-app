import React, { Component } from 'react'
import AllPostsList from '../ShowAllPosts'
import NewPostModal from '../NewPostModal'
import PostToShow from '../PostToShow'
import PostToShowUser from '../PostToShowUser'
import EditPostModal from '../EditPostModal'
// import LoginModal from '../LoginContainer'
// import RegisterModal from '../RegisterContainer'
import AllUserPostsList from '../ShowUserPosts'
import { Button} from 'semantic-ui-react'
import UserNav from '../UserNav'


export default class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            likes: [],
            userPosts:[],
            idOfPostToShow: -1,
            idOfPostToEdit: -1,
            loggedIn: false,
            loggedInUser: null,
            conditionalView: ''
        }
    }
    getPosts = async () =>{
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/posts/"
            const postsResponse = await fetch(url)
            const postsJson = await postsResponse.json()
            this.setState({
                posts: postsJson.data.posts,
                likes: postsJson.data.likes
            })
            // console.log(this.state.likes)
        }catch(err){
            console.log("Error getting posts data", err)
            }    
        }
    getUserPost = async () =>{
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/posts/userposts/"
            const postsResponse = await fetch(url,{
                credentials: 'include'
            })
            const postsJson= await postsResponse.json()
            this.setState({
                userPosts: postsJson.data
        })
        } catch (err){
            console.log("Error getting User posts data", err)
        }
    }
    createPost = async (postToAdd) =>{
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/posts/"
            const createPostResponse = await fetch(url,{
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postToAdd)
            })
            const createPostJson = await createPostResponse.json()
            // console.log("This is createpostjson", createPostJson);
            if(createPostResponse.status === 201 || createPostResponse.status === 200){
                this.setState({
                    posts: [...this.state.posts, createPostJson.data]
                })
            }
        } catch(err){
            console.log("Error adding post", err);
        }
    }
    deletePost = async (id) => {
        try {
            const url = process.env.REACT_APP_API_URL + "/90s/posts/" + id
            const deletePostResponse = await fetch(url, {
                credentials: 'include',
                method: "DELETE",
            })
            const deletePostJson = await deletePostResponse.json()
            // console.log("Here is the deletePostJson: ", deletePostJson)
            if(deletePostJson.status === 200 || deletePostJson.status === 201) {
                this.setState({
                    posts: this.state.posts.filter(post => post.id !== id),
                    conditionalView: 'show user posts'
                    
                })                
            }
        } catch(err) {
            console.log("There was an error deleting the post", id)
        }
        this.getPosts()
        this.getUserPost()
    }



    editPost = (idOfPostToEdit) => {
        // console.log("You are trying to edit a post with the id of: ", idOfPostToEdit)
        this.setState({
            idOfPostToEdit: idOfPostToEdit,
            conditionalView: "edit this post"
        })
    }



    updatePost = async (updatedPost) => {
        try {
            const url = process.env.REACT_APP_API_URL + "/90s/posts/" + this.state.idOfPostToEdit
            const updatePostResponse = await fetch(url, {
                credentials: 'include',
                method: "PUT",
                body: JSON.stringify(updatedPost),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const updatePostJson = await updatePostResponse.json()
            // console.log(updatePostJson)
            this.setState({
                idOfPostToEdit: -1,
                conditionalView: 'show user posts'
            })

        } catch(err) {
            console.log("error trying to edit post: ", updatedPost)
        }
        this.getUserPost()
    }
    login = async (loginInfo) => {
        // console.log("login() in App.js called with the following info", loginInfo);
        const url = process.env.REACT_APP_API_URL + '/90s/users/login/'
        try {
          const loginResponse = await fetch(url, {
            credentials: 'include', // sends cookie
            method: 'POST',
            body: JSON.stringify(loginInfo),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        //   console.log("loginResponse", loginResponse);
          const loginJson = await loginResponse.json()
        //   console.log("loginJson", loginJson);
          if(loginResponse.status === 200) {
              this.setState({
                loggedIn: true,
                loggedInUser: loginJson.data.username
              })
              console.log(loginJson.data);
            //   this.getUserPost()
            }
        } catch(error) {
          console.error("Error trying to log in")
          console.error(error)
        }
      }
    register = async (registerUser) =>{
        // console.log("register() in App.js called with the following info", registerUser);
        const url = process.env.REACT_APP_API_URL + '/90s/users/register/'
        try {
            const registerUserResponse = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerUser)
            })
        const registerUserJson = await registerUserResponse.json()
        // console.log(registerUserJson);
        } catch (err){
            console.log("Error in registering", registerUser);
        }
        this.login(registerUser)
    }
    logout = async () =>{
        // console.log("Logout has occured for this username");
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/users/logout/"
            const logoutResponse = await fetch(url)
            const logoutJson = await logoutResponse.json()
            this.setState({
                loggedInUser: null,
                loggedIn: false,
                conditionalView: ''

            })
            // console.log(logoutJson)
        }catch(err){
            console.log("Error getting posts data", err)
            }    
        }
    componentDidMount() {
        this.getPosts()
        // this.getUserPost()
    }
    showAllPosts = () =>{
        this.setState({
            conditionalView: ''
        })
    }
    showUserPosts = () =>{
        this.setState({
            conditionalView: 'show user posts'
        })
        this.getUserPost()
    }
    showPost = (idOfPostToShow) => {
        // console.log("you are trying to show post with id: ", idOfPostToShow)
        this.setState({
        idOfPostToShow: idOfPostToShow,
        conditionalView: 'show this post'
        })
    }
    showPostUser = (idOfPostToShow) => {
        console.log("you are trying to show post with id: ", idOfPostToShow)
        this.setState({
        idOfPostToShow: idOfPostToShow,
        conditionalView: 'show this post user'
        })
    }

    closeShowModal = () => {
        this.setState({
            idOfPostToShow: -1,
            conditionalView: ''
        })
    }
    closeUserShowModal = () => {
        this.setState({
            idOfPostToShow: -1,
            conditionalView: 'show user posts'
        })
    }

    closeEditModal = () => {
        this.setState({
            idOfPostToEdit: -1
        })
    }
    render(){
        return(
            <div className="container">
                <UserNav
                    showAllPosts={this.showAllPosts}
                    showUserPosts={this.showUserPosts}
                    login={this.login}
                    logout={this.logout} 
                    register={this.register}
                    loggedIn={this.state.loggedIn}
                    loggedInUser={this.state.loggedInUser}
                    createPost={this.createPost} />
                {
                    this.state.loggedIn === true
                    &&
                <h2>Lookin' fly, {this.state.loggedInUser}</h2>
                }

                {
                    this.state.conditionalView === ''
                    &&
                    <React.Fragment>
                <h2>All Throwback Posts</h2>
                <AllPostsList 
                    posts={this.state.posts}
                    showPost={this.showPost}
                    />
                    </React.Fragment>
                }
                {
                    this.state.conditionalView === 'show user posts'
                    &&
                    <React.Fragment>
                    <h2>{this.state.loggedInUser}'s Throwback Posts</h2>
                <AllUserPostsList
                    userPosts={this.state.userPosts}
                    showPost={this.showPostUser}
                    deletePost={this.deletePost}
                    editPost={this.editPost}
                    updatePost={this.updatePost}
                />
                </React.Fragment>
                }
                    {
                        this.state.idOfPostToEdit !== -1 && this.state.conditionalView === "edit this post"
                        &&
                        <EditPostModal
                        postToEdit={this.state.posts.find((post) => post.id === this.state.idOfPostToEdit)}
                        updatePost={this.updatePost}
                        closeEditModal={this.closeEditModal}
                        editPost={this.editPost}
                        showUserPosts={this.showUserPosts}
                        getUserPost={this.getUserPost}
                        />
                    }
                    {
                        this.state.idOfPostToShow !== -1 && this.state.conditionalView === 'show this post'
                        &&
                        <PostToShow
                            showThisPost={this.state.posts.find((post) => post.id === this.state.idOfPostToShow)}
                            closeShowModal={this.closeShowModal}
                            getPosts={this.getPosts}
                            state={this.state}
                        />
                    }
                    {
                        this.state.idOfPostToShow !== -1 && this.state.conditionalView === 'show this post user'
                        &&
                        <PostToShowUser
                            showThisPost={this.state.posts.find((post) => post.id === this.state.idOfPostToShow)}
                            closeShowModal={this.closeUserShowModal}
                            getPosts={this.getPosts}
                            state={this.state}
                        />
                    }
                    </div>
        )
    }
}