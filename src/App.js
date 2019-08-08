import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import QuestionForm from "./questionBoard/question/QuestionForm";
import Board from "./questionBoard/board/Board";
import Header from "./common/Header";
import Lesson from "./lesson/Lesson";
import agent from "./agent";

import "./App.css";
import "@reach/tabs/styles.css";

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
      <Tabs>
        <TabList>
          <Tab>Lesson</Tab>
          <Tab>Questions</Tab>
        </TabList>

        <TabPanels className="body">
          <TabPanel>
            <Lesson />
          </TabPanel>
          <TabPanel>
            <div className="split-panel">
              <QuestionForm addQuestion={addQuestion} fetchPosts={fetchPosts} />
              <Board postList={postList} />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
