import React, {useState, useEffect} from 'react';

import './App.css';
import QuestionForm from './question/QuestionForm';
import Board from './board/Board';
import agent from "./agent";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = () => {
    return agent
      .get("/posts/list")
      .then((post) => {
        setPostList(post.data.posts)

      })
      .catch((err) => {
      console.error(err);
    })
  }
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
        <Board postList={postList} />
      </div>
    );
}

export default App;