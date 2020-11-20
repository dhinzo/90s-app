import React, { Component } from 'react'
import AllPostsList from '../ShowAllPosts'
import NewPostForm from '../NewPostForm'
import ModalLoginModal from '../LoginContainer'


export default class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: []
        }
    }
    getPosts = async () =>{
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/posts/"
            const postsResponse = await fetch(url)
            const postsJson = await postsResponse.json()
            this.setState({
                posts: postsJson.data
            })
        }catch(err){
            console.log("Error getting posts data", err)

            }    
        }
    createPost = async (postToAdd) =>{
        try{
            const url = process.env.REACT_APP_API_URL + "/90s/posts/"
            const createPostResponse = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postToAdd)
            })
            const createPostJson = await createPostResponse.json()
            console.log("This is createpostjson", createPostJson);
            if(createPostResponse.status === 201 || createPostResponse.status === 200){
                this.setState({
                    posts: [...this.state.posts, createPostJson.data]
                })
            }
        } catch(err){
            console.log("Error adding post", err);
        }
    }
    componentDidMount() {
        this.getPosts()
    }


        render(){
            return(
                <React.Fragment>
                    <h2>ALl Posts</h2>
                    <AllPostsList posts={this.state.posts}/>
                    <NewPostForm createPost={this.createPost}/>
                    <ModalLoginModal>
                        <label>Test</label>
                    </ModalLoginModal>
                </React.Fragment>
            )
        }
    }
