import { InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";

import Navbar from "src/components/Navbar";
import DocumentBrowser from "./DocumentBrowser";
import MultiSelect from "./MultiSelect";
import Timeline from "./Timeline";

import "./style.less";

const MainView = () => {
  let [query, setQuery] = useState("");

  return (
    <>
      <Navbar />
      <div id="main-container">
        <div id="query-container">
          <div id="search-bar">
            <InputGroup
              large
              leftIcon="search"
              onChange={(event: React.FormEvent<HTMLElement>) => {
                setQuery((event.target as any).value);
              }}
              placeholder="Rechercher..."
              value={query}
            />
          </div>
          <div id="filters">
            <MultiSelect />
          </div>
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
