import React, { useState, useEffect } from "react";

import "./App.css";
import QuestionForm from "./question/QuestionForm";
import Board from "./board/Board";
import agent from "./agent";
import fakeDB from "./data";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    // fetchPosts();
    fakeDB.questions;
  }, []);

  // fake until real db is up
  const fetchPosts = () => {
    console.log("where is this called?");
    return fakeDB.questions;
  };

  // const fetchPosts = () => {
  //   return agent
  //     .get("/posts/list")
  //     .then(post => {
  //       setPostList(post.data.posts);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  // fake until real db is up
  const addQuestion = question => {
    const newQuestion = {
      _id: Math.random(),
      datePosted: new Date(),
      questionText: question,
      votes: 0
    };
    fakeDB.questions.push(newQuestion);
    fetchPosts();
  };

  // const addQuestion = question => {
  //   return (
  //     agent
  //       .post("/posts/create", { question })
  //       .then(() => {
  //         console.log("post successful");
  //         fetchPosts();
  //       })
  //       .catch(() => console.error("error posting"))
  //   );
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Have a question?</h1>
      </header>
      <div className="body">
        <QuestionForm addQuestion={addQuestion} fetchPosts={fetchPosts} />
        <Board postList={postList} />
      </div>
    </div>
  );
}

export default App;
