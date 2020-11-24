import logo from './logo.svg';
import './App.css';
import React from 'react'
import PostContainer from './PostsContainer'


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <PostContainer/>
    </div>
  );
  }
}

export default App;
