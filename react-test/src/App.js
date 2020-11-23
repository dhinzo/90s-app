import logo from './logo.svg';
import './App.css';
import React from 'react'
import PostContainer from './PostsContainer'


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <h1 id='title-text' class='main-text'>Thats SoOo 90s!</h1>
      <PostContainer/>
    </div>
  );
  }
}

export default App;
