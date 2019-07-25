import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import Home from "../home/Home";
import QuestionForm from "../questionBoard/question/QuestionForm";
import Board from "../questionBoard/board/Board";
import "@reach/tabs/styles.css";
import "./tabs.css";

const TabContainer = ({ postList, addQuestion, fetchPosts }) => (
  <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Questions</Tab>
    </TabList>

    <TabPanels className="body">
      <TabPanel>
        <Home />
      </TabPanel>
      <TabPanel>
        <div>
          <QuestionForm addQuestion={addQuestion} fetchPosts={fetchPosts} />
          <Board postList={postList} />
        </div>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export default TabContainer;
