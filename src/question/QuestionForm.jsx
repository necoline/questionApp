import React, { useState } from 'react';

import './Question.css';


function QuestionForm ({addQuestion}) {
  const [question, setQuestion] = useState("")

    const setSubmission = event => {
        event.preventDefault()
        addQuestion(question)
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