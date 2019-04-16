import * as React from "react";

import { storiesOf } from "@storybook/react";
import { ProgressBar } from ".";

storiesOf("ProgressBar", module).add("default", () => (
  <div className="bd-notification is-dark">
    <ProgressBar  />
  </div>
));
