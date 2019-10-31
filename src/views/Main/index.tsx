import { InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";

import Navbar from "src/components/Navbar";
import DocumentBrowser from "./DocumentBrowser";
import Timeline from "./Timeline";

import "./style.less";

const MainView = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar />
      <div id="main-container">
        <div id="query-container">
          <InputGroup
            large
            leftIcon="search"
            value={query}
            onChange={(event: React.FormEvent<HTMLElement>) => {
              setQuery((event.target as any).value);
            }}
          />
        </div>

        <div id="result-container">
          <DocumentBrowser />
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default MainView;
