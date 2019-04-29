import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Breadcrumb } from ".";

const breadcrumbs = ['Петр Алексеевич', '2018', 'Итоги пройденой рекламной компании'];

storiesOf("Breadcrumb", module).add("default", () => (
  <div className="bd-notification is-dark">
    <Breadcrumb items={breadcrumbs} size="small" />
  </div>
));