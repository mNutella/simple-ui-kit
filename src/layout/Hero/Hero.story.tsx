import * as React from "react";

import { storiesOf } from "@storybook/react";
import Hero, { HeroHeader, HeroBody, HeroFooter } from ".";
import Container from "../Container"

storiesOf("Hero", module).add("default", () => (
  <div>
    <Hero color="brown">
      <HeroBody>
        Default
      </HeroBody>
    </Hero>
    <Hero small>
      <HeroBody>
        Small
      </HeroBody>
    </Hero>
    <Hero medium color="red">
      <HeroBody>
        Medium
      </HeroBody>
    </Hero>
    <Hero large color="yellow">
      <HeroBody>
        Large
      </HeroBody>
    </Hero>
    <Hero halfHeight color="green">
      <HeroBody>
        Half Height
      </HeroBody>
    </Hero>
    <Hero fullHeight color="blue">
      <HeroBody>
        Full Height
      </HeroBody>
    </Hero>
  </div>
));

storiesOf("Hero", module).add("with container ", () => (
  <div>
    <Hero color="brown">
      <HeroBody>
        Default
      </HeroBody>
    </Hero>
    <Hero small>
      <HeroBody>
        Small
      </HeroBody>
    </Hero>
    <Hero medium color="red">
      <HeroBody>
        <Container>
          <p className="bd-notification is-success">
            Medium - Container
          </p>
        </Container>
      </HeroBody>
    </Hero>
    <Hero large color="yellow">
      <HeroBody>
        <Container fluid>
          <p className="bd-notification is-info">
            Large - Container Fluid
          </p>
        </Container>
      </HeroBody>
    </Hero>
    <Hero halfHeight color="green">
      <HeroBody>
        <Container breakpoint="widescreen">
          <p className="bd-notification is-warning">
            Half Height - Container Widescreen
          </p>
        </Container>
      </HeroBody>
    </Hero>
    <Hero fullHeight color="blue">
      <HeroBody>
        <Container breakpoint="fullhd">
          <p className="bd-notification is-danger">
            Full Height - Container FullHD
          </p>
        </Container>
      </HeroBody>
    </Hero>
  </div>
));

storiesOf("Hero", module).add("in 3 parts", () => (
  <div>
    <Hero fullHeight>
      <HeroHeader>
        <div className="bd-notification is-info">Header</div>
      </HeroHeader>
      <HeroBody>
        Body
      </HeroBody>
      <HeroFooter>
        <div className="bd-notification is-danger">Footer</div>
      </HeroFooter>
    </Hero>
  </div>
));