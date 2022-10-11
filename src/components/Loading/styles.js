import styled, { css } from "styled-components";
import { fadeAnimation, shimmer } from "@styles/base/animations";
import { maxWidth } from "@styles/base/breakpoints";

export default styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  min-width: 240px;
  max-width: calc(20%);
  background-color: ${({ theme }) => theme.colors.lighter};
  border-radius: 8px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: ${fadeAnimation} 0.2s ease-in-out forwards;
  animation-delay: 0.6s;
  opacity: 0;

  ${({ bigger }) =>
    bigger &&
    css`
      max-width: 780px;
      height: 680px;
    `};

  ${maxWidth.xl`
    max-width: calc(25%);
  `}

  ${maxWidth.md`
    max-width: calc(50% - 12px);
  `}

  ${maxWidth.xs`
    max-width: 100%;
  `}

  .shimmer-animation {
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${shimmer};
    animation-timing-function: linear;
    background: #ddd;
    background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
    background-size: 1200px 100%;
  }

  .thumbnail {
    padding-bottom: 48%;
  }

  .content-container {
    padding: 12px;
  }

  .title-line {
    height: 24px;
    width: 100%;
    margin-bottom: 12px;
    border-radius: 20px;
  }

  .content-line {
    height: 8px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 8px;
  }

  .shorter {
    width: 40%;
  }
`;
