import { InputGroup } from "@blueprintjs/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "src/components/Navbar";
import EventBrowser from "./EventBrowser";
import MultiSelect from "./MultiSelect";
import Timeline from "./Timeline";

import "./style.less";
import { IEvent } from "src/types";

import { setEvents } from "src/services/events";

const mockEvents: IEvent[] = [
  {
    start: "2017-01-10 06:00",
    title: "Fracture des cheveux",
    type: "Diagnostic"
  },
  {
    start: "2017-01-10 08:00",
    title: "Une infusion de camomille",
    type: "Prescription"
  },
  {
    start: "2019-01-10 13:00",
    title: "Entorse de l'oreille gauche",
    type: "Diagnostic"
  },
  {
    start: "2019-01-10 15:00",
    end: "2019-01-12 15:00",
    title: "Deux jours de repos",
    type: "Prescription"
  },
  {
    start: "2019-01-14 00:00",
    title: "Double croisement des doigts de pieds",
    type: "Diagnostic"
  },
  {
    start: "2019-01-14 15:00",
    title: "Un peu de tisane",
    type: "Prescription"
  }
];

const MainView = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(setEvents(mockEvents));
  }, []);

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
          <EventBrowser />
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default MainView;
