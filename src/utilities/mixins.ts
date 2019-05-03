import { ThemedCssFunction } from "styled-components";
import { css } from "../theme/styled-components";
import { Theme } from "../theme/index"

/**
 * Default sizes properties.
 *
 * @type {Object}
 *
 */

const sizes = {
  mobile: 320,
  tablet: 769,
  desktop: 1088,
  widescreen: 1280,
  fullhd: 1472,
};

/**
 * Iterating through the sizes and creating a media template.
 *
 * @type {Function}
 * @return {Object} sizes
 * 
 */

export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media screen and (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<Theme> },
);

/**
 * Iterating through the max sizes and creating a media template.
 *
 * @type {Function}
 * @return {Object} sizes
 * 
 */

export const mediaMax = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media screen and (max-width: ${sizes[label] - 1}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<Theme> },
);

/**
 * A sub style.
 *
 * @type {Styles}
 */

export const overflow_touch = css`
  -webkit-overflow-scrolling: touch;
`

/**
 * A function to create styles with offset or not.
 *
 * @type {Function}
 * @return {Styles}
 * 
 */

export const overlay = (offset = 0) => {
  let extra = '';

  if (offset) {
    extra = `
      bottom: ${offset};
      left: ${offset};
      right: ${offset};
      top: ${offset};
    `
  }

  return css`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    ${extra}
  `
}