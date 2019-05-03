import * as React from "react";

import { storiesOf } from "@storybook/react";
import Text from ".";

storiesOf("Text", module).add("types", () => ( 
  <div className="bd-notification is-dark">
    <Text>Default</Text>
    <Text subtext>Subtitle</Text>
    <Text weight="bold">Text bold</Text>
    <Text subtext weight="bold">Subtitle</Text>
    <Text size={5}>Default</Text>
    <Text size={5} subtext>Subtitle</Text>
  </div>
));

storiesOf("Text", module).add("size", () => ( 
  <div className="bd-notification is-dark">
    <Text size={1}>This is just a text about nothing with size is 1</Text>
    <Text size={2}>This is just a text about nothing with size is 2</Text>
    <Text size={3}>This is just a text about nothing with size is 3</Text>
    <Text size={4}>This is just a text about nothing with size is 4</Text>
    <Text size={5}>This is just a text about nothing with size is 5</Text>
    <Text size={6}>This is just a text about nothing with size is 6</Text>
    <Text size={1} subtext>This is just a text about nothing with size is 1</Text>
    <Text size={2} subtext>This is just a text about nothing with size is 2</Text>
    <Text size={3} subtext>This is just a text about nothing with size is 3</Text>
    <Text size={4} subtext>This is just a text about nothing with size is 4</Text>
    <Text size={5} subtext>This is just a text about nothing with size is 5</Text>
    <Text size={6} subtext>This is just a text about nothing with size is 6</Text>
  </div>
));