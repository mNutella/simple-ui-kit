import * as React from "react";

import { storiesOf } from "@storybook/react";
import { NavbarItem } from "./components/NavbarItem";
import { NavbarBrand } from "./components/NavbarBrand";
import { NavbarBurger } from "./components/NavbarBurger";
import { NavbarMenu } from "./components/NavbarMenu";
import { NavbarContainer } from "./components/NavbarContainer";
import { Icon } from "../../elements/Icon";
import { Navbar } from ".";

storiesOf("Navbar", module).add("default", () => (
  <div>
    <Navbar>
      <NavbarBrand>
        <NavbarItem>
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarContainer position="start">
          <NavbarItem>Start</NavbarItem>
          <NavbarItem>Start</NavbarItem>
        </NavbarContainer>
        <NavbarContainer position="center">
          <NavbarItem>End</NavbarItem>
          <NavbarItem>End</NavbarItem>
        </NavbarContainer>
        <NavbarContainer position="end">
          <NavbarItem>End</NavbarItem>
          <NavbarItem>End</NavbarItem>
        </NavbarContainer>
      </NavbarMenu>
    </Navbar>
  </div>
));

storiesOf("Navbar", module).add("items", () => (
  <div>
    <NavbarItem>
      Something value
    </NavbarItem>
    <NavbarItem>
      <Icon />
    </NavbarItem>
    <NavbarItem>
      With Icon
      <Icon />
    </NavbarItem>
    <NavbarItem active>
      Active
    </NavbarItem>
  </div>
));
