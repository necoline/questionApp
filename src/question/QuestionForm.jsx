import React, { Component } from 'react';

import './Question.css';
import agent from "../agent";

class QuestionForm extends Component {
    state = {
        question: ""
    }

    setSubmission = () => event => {
        event.preventDefault();
        console.log('ques', this.state.question)
        // create id
        // submit question post
        return agent
        .post("/posts/create", this.state.question)
        .then(() => console.log('post successful'))
        .catch(() => console.error('error posting'))
    };

    handleChange = ({ target }) => {
        this.setState({ question: target.value });
    };

  render() {
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.setSubmission()}>
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