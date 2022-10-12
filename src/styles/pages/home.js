import styled, { css } from "styled-components";
import { fadeAnimation } from "@styles/base/animations";

export default styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .videos-list-message,
  .videos-list {
    display: flex;
    justify-content: center;
    animation: ${fadeAnimation} 0.4s ease-in-out forwards;
    opacity: 0;

    ${({ initialPosition }) =>
      initialPosition &&
      css`
        animation: none;
      `}
  }

  .videos-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    padding: 0px 12px;
    gap: 12px;
    width: 100%;
    height: min-content;
  }
`;
