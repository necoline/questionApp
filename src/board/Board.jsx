import React, { useState, useEffect } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import './Board.css';
import Post from './Post';
import agent from "../agent";

function Board ({postList}) {

      const setVoteSubmission = question => event => {
        event.preventDefault();
      // submit question update => question.voteCount++
    };

    return (
      <div className="board-container">
        {postList.map(post => 
          <Post 
            key={post._id}
            question={post.question} 
            rank={`# ${postList.indexOf(post)+ 1}`} 
            voteCount={post.voteCount} 
            vote={setVoteSubmission()}
          />
        )}
      </div>
    );
}

export default Board;