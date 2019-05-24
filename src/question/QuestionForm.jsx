import React, { useState } from 'react';

import './Question.css';
import agent from "../agent";


function QuestionForm () {
  const [question, setQuestion] = useState("");

    const setSubmission = event => {
        event.preventDefault();
        return agent
          .post("/posts/create", {question})
          .then(() => console.log('post successful'))
          .catch(() => console.error('error posting'))
    };

    return (
      <div className="form-container">
        <form className="form" onSubmit={setSubmission}>
            <textarea 
                id="question" 
                type="text"
                placeholder="Post it here!"
                onChange={e => setQuestion(e.target.value)}
                value={question}
                >
            </textarea>
            <button className="button">
                Submit
            </button>
        </form>
      </div>
    );
}

export default QuestionForm;