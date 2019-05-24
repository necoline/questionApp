import React from 'react';

import './App.css';
import QuestionForm from './question/QuestionForm';
import Board from './board/Board';
import agent from "./agent";


function App() {
  const addQuestion = (question) => {
    return agent
      .post("/posts/create", {question})
      .then(() => console.log('post successful'))
      .catch(() => console.error('error posting'))
};
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">
          Have a question?
          </h1>
        </header>
        <QuestionForm addQuestion={addQuestion}/>
        <Board />
      </div>
    );
}

export default App;