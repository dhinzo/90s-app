import React, { Component } from 'react'
import AllPostsList from '../ShowAllPostsContainer'


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
    componentDidMount() {
        this.getPosts()
    }


        render(){
            return(
                <React.Fragment>
                    <h2>ALl Posts</h2>
                    <AllPostsList posts={this.state.posts}/>
                </React.Fragment>
            )
        }
    }
