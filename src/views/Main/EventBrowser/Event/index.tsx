import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IReduxStore } from "src/types";
import { toggleEvent } from "src/services/events";

import "./style.less";
import { typeToColor } from "src/services/typeParser";

interface IProps {
  index: number;
  title: string;
  type: string;
  date: string;
  description: string;
}

const Event = ({ index, title, type, date, description }: IProps) => {
  const dispatch = useDispatch();
  const selectedEvents = useSelector(
    (state: IReduxStore) => state.events.selectedEvents
  );

  return (
    <div
      className={`event ${
        selectedEvents.indexOf(index) > -1 ? "selected" : ""
      }`}
      onClick={() => dispatch(toggleEvent(index))}
    >
      <div className="tags">
        <div className="tag" style={{ backgroundColor: typeToColor(type) }}>
          {type}
        </div>
        <div className="tag">{date}</div>
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Event;
