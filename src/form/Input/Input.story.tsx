import * as React from "react";
import { storiesOf } from "@storybook/react";

import Input from ".";

storiesOf("Input", module).add("default", () => (
  <div>
    <div className="bd-notification is-dark">
      <Input placeholder="Find yourself" />
    </div>
    <div className="bd-notification is-dark">
      <Input placeholder="Rounded" rounded />
    </div>
    <div className="bd-notification is-dark">
      <Input placeholder="Icon" icon="search" />
    </div>
    <div className="bd-notification is-dark">
      <Input placeholder="Max length 5" maxLength={5} />
    </div>
  </div>
));