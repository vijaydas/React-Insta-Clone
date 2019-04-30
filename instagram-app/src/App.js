import React from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
    console.log(this.state.posts)
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
        
      </div>
    );
  }
};



export default App;
