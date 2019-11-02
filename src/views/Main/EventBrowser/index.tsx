import React from "react";
import { useSelector } from "react-redux";

import Event from "./Event";

import "./style.less";
import { IEvent, IReduxStore } from "src/types";
import { toggleEvent } from "src/services/events";

const EventBrowser = () => {
  const events = useSelector((state: IReduxStore) => state.events.events);

  return (
    <div className="document-browser">
      {events.map((event: IEvent, index: number) => (
        <Event
          key={index}
          index={index}
          title={event.title}
          type={event.type}
          date={event.start}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default EventBrowser;
