import { AnyAction } from "redux";
import { IEvent } from "src/types";

// Types

export interface IStore {
  events: IEvent[];
  selectedEvents: number[];
}

// Actions

export const setEvents = (events: IEvent[]) => ({
  type: "SET_EVENTS",
  payload: {
    events
  }
});

export const toggleEvent = (index: number) => ({
  type: "TOGGLE_EVENT",
  payload: {
    index
  }
});

// Reducer

const initialState: IStore = {
  events: [],
  selectedEvents: []
};

export const eventsReducer = (
  state = initialState,
  action: AnyAction
): IStore => {
  switch (action.type) {
    case "SET_EVENTS":
      return {
        events: action.payload.events,
        selectedEvents: []
      };

    case "TOGGLE_EVENT":
      if (state.selectedEvents.indexOf(action.payload.index) > -1) {
        return {
          ...state,
          selectedEvents: state.selectedEvents.filter(
            (selectedIndex: number) => selectedIndex !== action.payload.index
          )
        };
      } else {
        return {
          ...state,
          selectedEvents: [...state.selectedEvents, action.payload.index]
        };
      }

    default:
      return state;
  }
};
