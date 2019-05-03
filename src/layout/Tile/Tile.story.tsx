import * as React from "react";

import { storiesOf } from "@storybook/react";
import Tile from ".";

storiesOf("Tile", module).add("default", () => (
  <div>
    <Tile kind="ancestor">
      <Tile size={8} vertical>
        <Tile>
          <Tile kind="parent" vertical>
            <Tile kind="child" as="article" className="bd-notification is-primary">
              <h1 className="title">Vertical</h1>
              <h1 className="subtitle">Top Tile</h1>
            </Tile>
            <Tile kind="child" as="article" className="bd-notification is-warning">
              <h1 className="title">Tiles</h1>
              <h1 className="subtitle">Bottom Tile</h1>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile kind="child" as="article" className="bd-notification is-info">
              <h1 className="title">Middle</h1>
              <h1 className="subtitle">With image Tile</h1>
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile kind="child" as="article" className="bd-notification is-danger">
            <h1 className="title">Wide tile</h1>
            <h1 className="subtitle">Aligned with the right tile</h1>
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="parent">
        <Tile kind="child" as="article" className="bd-notification is-success">
          <h1 className="title">Tall tile</h1>
          <h1 className="subtitle">With even more content</h1>
        </Tile>
      </Tile>
    </Tile>
  </div>
));