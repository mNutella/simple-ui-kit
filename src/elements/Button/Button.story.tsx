import * as React from "react";

import { storiesOf } from "@storybook/react";
import Button from ".";
import Text from "../Text";

storiesOf("Button", module).add("default", () => (
  <div >
    <div className="bd-notification is-dark">
      <Text size={5}>Small</Text>
      <Button size="small">All</Button>
      <Button size="small" loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Medium</Text>
      <Button size="medium">All</Button>
      <Button size="medium" loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Large</Text>
      <Button size="large">All</Button>
      <Button size="large" loading>All</Button>
    </div>
    <div className="bd-notification is-light">
      <Text size={5} color="#6F48A7">Not Active</Text>
      <Button active={false} size="medium" ><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Is Active</Text>
      <Button active={true} size="medium"><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Reversed</Text>
      <Button size="medium" reversed><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Outlined</Text>
      <Button outlined size="medium"><strong>B</strong></Button>
      <Button outlined size="medium" loading>All</Button>
    </div>
  </div>
));

storiesOf("Button", module).add("circle", () => (
  <div >
    <div className="bd-notification is-dark">
      <Text size={5}>Small</Text>
      <Button size="small" circle>All</Button>
      <Button size="small" circle loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Medium</Text>
      <Button size="medium" circle>All</Button>
      <Button size="medium" circle loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Large</Text>
      <Button size="large" circle>All</Button>
      <Button size="large" circle loading>All</Button>
    </div>
    <div className="bd-notification is-light">
      <Text size={5} color="#6F48A7">Not Active</Text>
      <Button active={false} size="medium" circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Is Active</Text>
      <Button active={true} size="medium" circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Reversed</Text>
      <Button size="medium" reversed circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Outlined</Text>
      <Button outlined size="medium" circle><strong>B</strong></Button>
      <Button outlined size="medium" circle loading>All</Button>
    </div>
  </div>
));

storiesOf("Button", module).add("min width", () => (
  <div >
    <div className="bd-notification is-dark">
      <Text size={5}>Small</Text>
      <Button minW={150} size="small" circle>All</Button>
      <Button minW={150} size="small" circle loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Medium</Text>
      <Button size="medium" circle>All</Button>
      <Button size="medium" circle loading>All</Button>
    </div>
    <div className="bd-notification is-dark">
      <Text size={5}>Large</Text>
      <Button size="large" circle>All</Button>
      <Button size="large" circle loading>All</Button>
    </div>
    <div className="bd-notification is-light">
      <Text size={5} color="#6F48A7">Not Active</Text>
      <Button minW={150} active={false} size="medium" circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Is Active</Text>
      <Button active={true} size="medium" circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Reversed</Text>
      <Button size="medium" reversed circle><strong>B</strong></Button>
      <Text size={5} color="#6F48A7">Outlined</Text>
      <Button outlined size="medium" circle><strong>B</strong></Button>
      <Button outlined size="medium" circle loading>All</Button>
    </div>
  </div>
));