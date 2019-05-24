import React, { Component } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import './Board.css';
import Post from './Post';
import agent from "../agent";


class Board extends Component {
    state = {
      postList: []
    }

    componentDidMount() {
      // get all posts
      this.fetchPosts()
    }

    fetchPosts = () => {
      console.log('fetching')
      return agent
        .get("/posts/list")
        .then((post) => {
          console.log('post', post.data.posts)
          this.setState({postList: post.data.posts})
        })
        .catch((err) => {
        console.error(err);
      })
    }

      setVoteSubmission = question => event => {
        event.preventDefault();
      // submit question update => question.voteCount++
    };

  render() {
    return (
      <div className="board-container">
        {this.state.postList.map(post => git 
          <Post 
            key={post._id}
            question={post.question} 
            rank={`# ${this.state.postList.indexOf(post)+ 1}`} 
            voteCount={post.voteCount} 
            vote={this.setVoteSubmission()}
          />
        )}
      </div>
    );
  }
}

export default Board;