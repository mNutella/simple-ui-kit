import { ThemedCssFunction } from "styled-components";
import { css } from "../theme/styled-components";
import { ITheme } from "../theme/index"

const sizes = {
  mobile: 320,
  tablet: 769,
  desktop: 1088,
  widescreen: 1280,
  fullhd: 1472,
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media screen and (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<ITheme> },
);

export const mediaMax = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media screen and (max-width: ${sizes[label] - 1}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: ThemedCssFunction<ITheme> },
);

export const overflow_touch = css`
  -webkit-overflow-scrolling: touch;
`