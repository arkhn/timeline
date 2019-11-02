import React, { useState } from "react";

import "./style.less";

interface IProps {
  title: string;
  type: string;
  date: string;
  description: string;
}

const Event = ({ title, type, date, description }: IProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`event ${selected ? "selected" : ""}`}
      onClick={() => setSelected(!selected)}
    >
      <div className="tags">
        <div className="tag">{type}</div>
        <div className="tag">{date}</div>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Event;
