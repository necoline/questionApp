import React from "react";
import "./Board.css";

const Post = props => (
  <div className="post">
    <div className="post-data">
      {props.rank}({props.voteCount})
    </div>
    {props.question}
    <div>
      <img src="../../assets/up-arrow.svg" alt="up vote" height="50px" />

      <span>down</span>
    </div>
  </div>
);

export default Post;
