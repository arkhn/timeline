import React from "react";

import Navbar from "src/components/Navbar";
import DocumentBrowser from "./DocumentBrowser";
import Timeline from "./Timeline";

import "./style.less";

const MainView = () => {
  return (
    <>
      <Navbar />
      <div id="main-container">
        <DocumentBrowser />
        <Timeline />
      </div>
    </>
  );
};

export default MainView;
