import React from "react";
import { push as Menu } from "react-burger-menu";
import LINK from "./LINK";

class NAV extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <LINK></LINK>
      </Menu>
    );
  }
}

export default NAV;
