import * as React from "react";

import { storiesOf } from "@storybook/react";
import Container from ".";

storiesOf("Container", module).add("default", () => (
  <div>
    <Container>
      <p className="bd-notification is-success">
        Default
      </p>
    </Container>
    <Container fluid>
      <p className="bd-notification is-info">
        Fluid
      </p>
    </Container>
    <Container breakpoint="widescreen">
      <p className="bd-notification is-warning">
        Widescreen
      </p>
    </Container>
    <Container breakpoint="fullhd">
      <p className="bd-notification is-danger">
        FullHD
      </p>
    </Container>
  </div>
));