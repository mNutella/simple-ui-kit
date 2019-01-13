import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Icon } from ".";

storiesOf("Icon", module).add("default", () => (
  <div>
  <p>Default</p>
  <Icon />
  <p>Small</p>
  <Icon small />
  <p>Medium</p>
  <Icon medium />
  <p>Large</p>
  <Icon large />
  </div>
));