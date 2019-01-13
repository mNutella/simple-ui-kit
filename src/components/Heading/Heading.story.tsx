import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Heading } from ".";

storiesOf("Heading", module).add("default", () => ( 
  <div>
    <Heading>Default</Heading>
    <Heading subtitle>Subtitle</Heading>
    <Heading weight="bold">Text bold</Heading>
    <Heading subtitle weight="bold">Subtitle</Heading>
    <Heading size={5}>Default</Heading>
    <Heading size={5} subtitle>Subtitle</Heading>
  </div>
));