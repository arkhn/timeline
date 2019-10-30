import { Alignment, Navbar as BPNavbar } from "@blueprintjs/core";
import * as React from "react";
import useReactRouter from "use-react-router";

import "./style.less";

// Logo
const arkhnLogoWhite = require("src/assets/img/arkhn_logo_only_white.svg");

const Navbar = () => {
  const { history, location } = useReactRouter();

  return (
    <BPNavbar id="navbar" className="bp3-dark">
      <BPNavbar.Group align={Alignment.LEFT}>
        <BPNavbar.Heading
          onClick={() => {
            history.push("/");
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: arkhnLogoWhite }} />
          <h2>TIMELINE</h2>
        </BPNavbar.Heading>
      </BPNavbar.Group>
    </BPNavbar>
  );
};

export default Navbar;
