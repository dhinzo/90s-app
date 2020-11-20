import React, { Component } from 'react'
import AllPostsList from '../ShowAllPosts'
import NewPostForm from '../NewPostForm'
import PostToShow from '../PostToShow'
import EditPost from '../EditPost'


export default class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            posts: [],
            idOfPostToShow: -1,
            idOfPostToEdit: -1
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

    deletePost = async (id) => {
        try {
            const url = process.env.REACT_APP_API_URL + "/90s/posts/" + id
            const deletePostResponse = await fetch(url, {
                method: "DELETE",
            // }).then( res => {
            //     const findIndex = this.state.posts.findIndex(post => post.id === id)
            //     const copyPosts = [...this.state.posts]
            //     copyPosts.splice(findIndex, 1)
            //     this.setState({
            //         posts: copyPosts
            //     })
            })
            const deletePostJson = await deletePostResponse.json()
            console.log("Here is the deletePostJson: ", deletePostJson)
            if(deletePostJson.status === 200 || deletePostJson.status === 201) {
                this.setState({
                    posts: this.state.posts.filter(post => post.id !== id)
                })
            }
            //this.getPosts()
        } catch(err) {
            console.log("There was an error deleting the post", id)
        }
    }


    editPost = (idOfPostToEdit) => {
        console.log("You are trying to edit a post with the id of: ", idOfPostToEdit)
        this.setState({
            idOfPostToEdit: idOfPostToEdit
        })
    }

    updatePost = async (updatedPost) => {
        try {
            const url = process.env.REACT_APP_API_URL + "/90s/posts/" + this.state.idOfPostToEdit

            const updatePostResponse = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(updatedPost),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const updatePostJson = await updatePostResponse.json()
            console.log(updatePostJson)
            this.setState({
                idOfPostToEdit: -1
            })
            this.getPosts()
        } catch(err) {
            console.log("error trying to edit post: ", updatedPost)
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    showPost = (idOfPostToShow) => {
        console.log("you are trying to show post with id: ", idOfPostToShow)
            this.setState({
                idOfPostToShow: idOfPostToShow
            })
        }
    

    closeShowModal = () => {
        this.setState({
            idOfPostToShow: -1
        })
    }

    closeEditModal = () => {
        this.setState({
            idOfPostToEdit: -1
        })
    }

    render(){
        return(
            <React.Fragment>
                <h2>All Throwback Posts</h2>
                <NewPostForm createPost={this.createPost}/>
                <AllPostsList 
                    posts={this.state.posts}
                    showPost={this.showPost}
                    deletePost={this.deletePost}
                    editPost={this.editPost}
                    />
                    {
                        this.state.idOfPostToEdit !== -1 &&
                        <EditPost
                        postToEdit={this.state.posts.find((post) => post.id === this.state.idOfPostToEdit)}
                        updatePost={this.updatePost}
                        closeEditModal={this.closeEditModal}
                        />
                    }
                {
                    this.state.idOfPostToShow !== -1 
                    &&
                    <PostToShow
                        showThisPost={this.state.posts.find((post) => post.id === this.state.idOfPostToShow)}
                        closeShowModal={this.closeShowModal}
                        getPosts={this.getPosts}
                        deletePost={this.deletePost}
                    />
                }
            </React.Fragment>
        )
    }
}
