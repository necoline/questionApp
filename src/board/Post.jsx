import React from 'react';

import './Board.css';

const Post = props => (
      <div className="post">
        <div className="post-stats">
          #{props.rank}
          ({props.voteCount})
        </div>
        {props.question}
        <div>
          <span>up</span>
          <span>down</span>
        </div>
      </div>
    );

export default Post;