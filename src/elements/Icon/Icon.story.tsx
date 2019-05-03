import * as React from "react";

import { storiesOf } from "@storybook/react";
import Icon, { icons } from ".";

storiesOf("Icon", module).add("default", () => (
  <div>
    {Object.keys(icons).map((name: keyof typeof icons) => 
        <div>
          <p>{name}</p>
          <Icon name={name} />
        </div>
    )}
  </div>
));