import { IStore as IEventsStore } from "src/services/events";

export interface IReduxStore {
  events: IEventsStore;
}

export interface IEvent {
  title?: string;
  type: string;
  start: string;
  end?: string;
  description?: string;
}
