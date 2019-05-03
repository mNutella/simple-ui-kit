import * as React from "react";

import { storiesOf } from "@storybook/react";
import Image from ".";

const rations = ['square', '1by1', '4by3', '3by2', '16by9', '2by1', '5by4', '5by3', '3by1', '4by5', '3by4', '2by3', '3by5', '9by16', '1by2', '1by3']; 
const sizes = [16, 24, 32, 48, 64, 96, 128]; 

storiesOf("Image", module).add("default", () => (
  <div style={{ width: 320 }}>
    <Image src="https://bit.ly/2DrK18H" rounded ration="3by2" />
  </div>
));

storiesOf("Image", module).add("Fixed Square", () => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Size</th>
        <th>Image</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {sizes.map(size => (
        <tr key={size}>
          <td />
          <td style={{ width: 100 }}>{size}</td>
          <td style={{ width: 128 }}>
            <Image
              src="https://bit.ly/2If2zfN"
              size={size}
            />
          </td>
          <td />
        </tr>
      ))}
    </tbody>
  </table>
));

storiesOf("Image", module).add("Responsive images with ratios", () => (
  <table>
    <thead>
      <tr>
        <th />
        <th>Size</th>
        <th>Image</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {rations.map(ration => (
        <tr key={ration}>
          <td />
          <td style={{ width: 100 }}>{ration}</td>
          <td style={{ width: 128 }}>
            <Image
              src="https://bit.ly/2If2zfN"
              ration={ration}
            />
          </td>
          <td />
        </tr>
      ))}
    </tbody>
  </table>
));