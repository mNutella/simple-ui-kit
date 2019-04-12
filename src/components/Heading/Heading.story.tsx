import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Heading } from ".";

storiesOf("Heading", module).add("types", () => ( 
  <div className="bd-notification is-dark">
    <Heading>Default</Heading>
    <Heading subtitle>Subtitle</Heading>
    <Heading weight="bold">Text bold</Heading>
    <Heading subtitle weight="bold">Subtitle</Heading>
    <Heading size={5}>Default</Heading>
    <Heading size={5} subtitle>Subtitle</Heading>
  </div>
));

storiesOf("Heading", module).add("size", () => ( 
  <div className="bd-notification is-dark">
    <Heading size={1}>Size is 1</Heading>
    <Heading size={2}>Size is 2</Heading>
    <Heading size={3}>Size is 3</Heading>
    <Heading size={4}>Size is 4</Heading>
    <Heading size={5}>Size is 5</Heading>
    <Heading size={6}>Size is 6</Heading>
    <Heading size={1} subtitle>Size is 1</Heading>
    <Heading size={2} subtitle>Size is 2</Heading>
    <Heading size={3} subtitle>Size is 3</Heading>
    <Heading size={4} subtitle>Size is 4</Heading>
    <Heading size={5} subtitle>Size is 5</Heading>
    <Heading size={6} subtitle>Size is 6</Heading>
  </div>
));