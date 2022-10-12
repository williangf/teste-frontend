import { moveUpAnimation } from "@styles/base/animations";
import styled, { css } from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  transition: 1s;
  z-index: 5;

  ${({ isSearchTermFilled }) =>
    isSearchTermFilled &&
    css`
      animation: ${moveUpAnimation} 0.8s ease-in-out forwards;
    `}

  ${({ hasVideosLoaded }) =>
    hasVideosLoaded &&
    css`
      animation-duration: 0s;
    `}

  .search-form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 420px;
    padding: 0px 12px;
  }
`;
