import { IStore as IEventsStore } from "src/services/events";

export interface IReduxStore {
  events: IEventsStore;
}

export interface IEvent {
  type: string;
  start: string;
  end?: string;
  text?: string;
  textDisabled?: boolean;
  icon?: string;
  description?: string;
}
