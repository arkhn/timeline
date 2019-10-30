import { InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";

import "./style.less";

const DocumentBrowser = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="document-browser">
      <InputGroup
        large
        leftIcon="search"
        value={query}
        onChange={(event: React.FormEvent<HTMLElement>) => {
          setQuery((event.target as any).value);
        }}
      />

      <div className="documents">
        <ul>
          <li>document1</li>
          <li>document2</li>
          <li>document3</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentBrowser;
