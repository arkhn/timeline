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
    start: "2019-01-10 06:00",
    text: "Fracture des cheveux",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
  },
  {
    start: "2019-01-10 13:00",
    end: "2019-01-10 14:00",
    text: "Entorse de l'oreille gauche",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
  },
  {
    start: "2019-01-10 23:00",
    end: "2019-01-11 00:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    text: "Deux jours de repos",
    textDisabled: false,
    type: "Prescription"
  },
  {
    start: "2019-01-11 00:00",
    end: "2019-01-11 01:00",
    text: "Double croisement des doigts de pieds",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
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
