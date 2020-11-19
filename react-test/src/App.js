import logo from './logo.svg';
import './App.css';
import React from 'react'
import PostContainer from './PostsContainer'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1>Title Page Title</h1>
      <PostContainer/>
    </div>
  );
  }
}

export default App;
