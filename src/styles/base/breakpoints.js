import { css } from "styled-components";

export const breakpoints = {
  xs: 400,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

export const minWidth = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const maxWidth = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label] - 0.02}px) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
