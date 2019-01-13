import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Hero, HeroBody, HeroFoot, HeroHead } from ".";
import { Container } from "../Container"

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
          Medium - Container
        </Container>
      </HeroBody>
    </Hero>
    <Hero large color="yellow">
      <HeroBody>
        <Container fluid>
          Large - Container Widescreen
        </Container>
      </HeroBody>
    </Hero>
    <Hero halfHeight color="green">
      <HeroBody>
        <Container breakpoint="widescreen">
          Half Height - Container Fluid
        </Container>
      </HeroBody>
    </Hero>
    <Hero fullHeight color="blue">
      <HeroBody>
        <Container breakpoint="fullhd">
          Full Height - Container FullHD
        </Container>
      </HeroBody>
    </Hero>
  </div>
));

storiesOf("Hero", module).add("in 3 parts", () => (
  <div>
    <Hero fullHeight>
      <HeroHead>
        <div className="bd-notification is-info">Header</div>
      </HeroHead>
      <HeroBody>
        Body
      </HeroBody>
      <HeroFoot>
        <div className="bd-notification is-danger">Footer</div>
      </HeroFoot>
    </Hero>
  </div>
));