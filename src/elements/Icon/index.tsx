import * as React from "react";
import icons from "./icons";

/**
 * Default properties.
 *
 * @type {Object} icon
 */

type Props = {
  name?: keyof typeof icons;
  size?: number;
  fill?: string;
  onClick?: () => void;
}

/**
 * A icon.
 *
 * @type {Component}
 */

const Icon: React.FC<Props> = ({
  name = 'search',
  size = 16,
  fill,
  onClick,
}) => {
  const { viewBox, d } = icons[name];
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      onClick={onClick}>
      <path d={d} />
    </svg>
  )
}

export { icons };
export default Icon;