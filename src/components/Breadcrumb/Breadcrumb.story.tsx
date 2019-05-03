import * as React from "react";

import { storiesOf } from "@storybook/react";
import Breadcrumb from ".";

const breadcrumbs = ['Declan Arias', '2019', 'Evaluating Advertising Campaign Results'];

storiesOf("Breadcrumb", module).add("default", () => (
  <div className="bd-notification is-dark">
    <Breadcrumb items={breadcrumbs} size="small" />
  </div>
));