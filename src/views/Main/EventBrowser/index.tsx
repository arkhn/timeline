import React, { useState, useEffect } from "react";

import Event from "./Event";

import "./style.less";
import { IEvent } from "src/types";

interface IDocument {
  title: string;
  type: string;
  date: string;
  description: string;
}

interface IProps {
  events: any;
}

const EventBrowser = ({ events }: IProps) => {
  return (
    <div className="document-browser">
      {events.map((event: IEvent, index: number) => (
        <Event
          key={index}
          title={event.text}
          type={event.type}
          date={event.start}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventBrowser;
