import * as React from "react";
import { shallow } from "enzyme";
import Main from "./index";

describe("Main view", () => {
  it("Renders without crashing", () => {
    shallow(<Main />);
  });
});
