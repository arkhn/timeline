import React, { useState, useEffect } from "react";

import Document from "./Document";

import "./style.less";

interface IDocument {
  title: string;
  type: string;
  date: string;
  description: string;
}

const mockDocuments = [
  {
    title: "Document 1",
    type: "Prescription",
    date: "10-12-2019",
    description: "Short description"
  },
  {
    title: "Document 2",
    type: "Diagnostic",
    date: "10-12-2019",
    description: "Short description"
  },
  {
    title: "Document 3",
    type: "Observation",
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
        <Document
          key={index}
          title={document.title}
          type={document.type}
          date={document.date}
          description={document.description}
        />
      ))}
    </div>
  );
};

export default DocumentBrowser;
