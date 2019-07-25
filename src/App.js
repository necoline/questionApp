import React, { useState, useEffect } from "react";

import "./App.css";
import QuestionForm from "./questionBoard/question/QuestionForm";
import Board from "./questionBoard/board/Board";
import Header from "./common/Header";
import Tabs from "./common/Tabs";
import agent from "./agent";

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    return agent
      .get("/posts/list")
      .then(post => {
        setPostList(post.data.posts);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addQuestion = question => {
    return agent
      .post("/posts/create", { question })
      .then(() => {
        console.log("post successful");
        fetchPosts();
      })
      .catch(() => console.error("error posting"));
  };

  return (
    <div className="App">
      <Header headerTitle="Have a question?" />
      <Tabs
        addQuestion={addQuestion}
        fetchPosts={fetchPosts}
        postList={postList}
      />
      {/* <div className="body">
        <QuestionForm addQuestion={addQuestion} fetchPosts={fetchPosts} />
        <Board postList={postList} />
      </div> */}
    </div>
  );
}

export default App;
