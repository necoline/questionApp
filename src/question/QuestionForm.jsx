import React, { Component } from 'react';

import './Question.css';

class QuestionForm extends Component {
    state = {
        question: ""
    }

    setSubmission = event => {
        event.preventDefault();
        // create id
        // submit question post
    };

    handleChange = ({ target }) => {
        console.log('input', target)
        this.setState({ question: target.value });
    };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={(e) => this.setSubmission()}>
            <h1 className="title">Post it here!</h1>
            <label htmlFor="question" className="textarea-label">Question:</label>
            <textarea 
                id="question" 
                type="text"
                onChange={this.handleChange}
                value={this.state.question}
                >
            </textarea>
            <button className="button">
                Submit
            </button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;