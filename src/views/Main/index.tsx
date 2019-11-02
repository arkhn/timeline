import { InputGroup } from "@blueprintjs/core";
import React, { useState } from "react";

import Navbar from "src/components/Navbar";
import EventBrowser from "./EventBrowser";
import MultiSelect from "./MultiSelect";
import Timeline from "./Timeline";

import "./style.less";
import { IEvent } from "src/types";

const mockEvents: IEvent[] = [
  {
    category: "",
    start: "2019-01-10 06:00",
    end: "2019-01-10 07:00",
    text: "Fracture des cheveux",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
  },
  {
    category: "",
    start: "2019-01-10 13:00",
    end: "2019-01-10 14:00",
    text: "Entorse de l'oreille gauche",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
  },
  {
    category: "",
    start: "2019-01-10 23:00",
    end: "2019-01-11 00:00",
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    text: "Deux jours de repos",
    textDisabled: false,
    type: "Prescription"
  },
  {
    category: "",
    start: "2019-01-11 00:00",
    end: "2019-01-11 01:00",
    text: "Double croisement des doigts de pieds",
    textDisabled: false,
    icon: "/src/assets/img/arkhn_logo_only_white.svg",
    type: "Diagnostic"
  }
];

const MainView = () => {
  let [query, setQuery] = useState("");
  let [events, setEvents] = useState(mockEvents);

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
          <EventBrowser events={events} />
          <Timeline events={events} />
        </div>
      </div>
    </>
  );
};

export default MainView;
