import React from 'react';

import './Board.css';

const Post = props => (
      <div className="post">
        <div>
          {props.rank}
        </div>
        {props.question}
        <div>
          {props.voteCount}
        </div>
      </div>
    );

export default Post;