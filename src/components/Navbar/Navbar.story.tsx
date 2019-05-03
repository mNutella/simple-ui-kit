import * as React from "react";

import { storiesOf } from "@storybook/react";
import Icon from "../../elements/Icon";
import Navbar, { NavbarBrand, NavbarBurger, NavbarContainer, NavbarItem, NavbarMenu } from ".";

storiesOf("Navbar", module).add("default", () => (
  <div>
    <Navbar shadow>
      <NavbarBrand>
        <NavbarItem>
          <img
            src="https://bit.ly/2vm5xXY"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="112"
            height="28"
          />
        </NavbarItem>
        <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarContainer position="start">
          <NavbarItem tab>Start</NavbarItem>
          <NavbarItem tab><Icon /></NavbarItem>
        </NavbarContainer>
        <NavbarContainer position="center">
          <NavbarItem>End</NavbarItem>
          <NavbarItem><Icon /></NavbarItem>
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

storiesOf("Navbar", module).add("fixed", () => (
  <div>
    <Navbar shadow color="white" fixed="top">
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
          <NavbarItem tab>Start</NavbarItem>
          <NavbarItem tab>Start</NavbarItem>
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
    <Navbar shadow color="white" fixed="bottom">
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
          <NavbarItem tab>Start</NavbarItem>
          <NavbarItem tab>Start</NavbarItem>
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
    <div style={{height: '1000px', textAlign: 'center', padding: '50px', color: 'blue'}}>
      <a>Something Text...</a>
    </div>
  </div>
));