import React, { useState, useEffect } from "react";

import "./style.less";

interface IDocument {
  title: string;
  date: string;
  description: string;
}

const mockDocuments = [
  {
    title: "Document 1",
    date: "10-12-2019",
    description: "Short description"
  },
  {
    title: "Document 2",
    date: "10-12-2019",
    description: "Short description"
  },
  {
    title: "Document 3",
    date: "10-12-2019",
    description: "Short description"
  }
];

const DocumentBrowser = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    setDocuments(mockDocuments);
  }, [setDocuments]);

  return (
    <div className="document-browser">
      {documents.map((document: IDocument, index: number) => (
        <div className="document" key={index}>
          <div>{document.title}</div>
          <div>{document.date}</div>
          <div>{document.description}</div>
        </div>
      ))}
    </div>
  );
};

export default DocumentBrowser;
