import { IToaster } from "@blueprintjs/core";
import * as redux from "redux";

export interface IEvent {
  category: string;
  start: string;
  end?: string;
  text?: string;
  textDisabled?: boolean;
  icon?: string;
  type: string;
  description?: string;
}
