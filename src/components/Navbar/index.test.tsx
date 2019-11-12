import * as React from "react";
import { shallow } from "enzyme";
import Navbar from "./index";
import { MemoryRouter } from "react-router";

describe("Navbar component", () => {
  it("Renders without crashing", () => {
    shallow(
      <MemoryRouter initialEntries={["/"]}>
        <Navbar />
      </MemoryRouter>
    );
  });
});
