import React from 'react';

import './App.css';
import QuestionForm from './question/QuestionForm';
import Board from './board/Board';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">
          Have a question?
          </h1>
        </header>
        <QuestionForm />
        <Board />
      </div>
    );
}

export default App;