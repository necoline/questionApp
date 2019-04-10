import React, { Component } from 'react';

import './Board.css';
import Post from './Post';

class Board extends Component {
    state = {
      postList: [
        {
          question: "sample?",
          voteCount: 3,
          id: 1
        },
        {
          question: "sample 2?",
          voteCount: 2,
          id: 2
        }
      ]
    }

    componentDidMount() {
      // get all posts
      // order postList by voteCount
    }

    setVoteSubmission = question => event => {
        event.preventDefault();
      // submit question update => question.voteCount++
    };

  render() {
    return (
      <div className="board-container">
        {this.state.postList.map(post => 
          <Post 
            key={post.id}
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