import { fadeAnimation } from "@styles/base/animations";
import { maxWidth } from "@styles/base/breakpoints";
import styled from "styled-components";

export default styled.main`
  .videos-list-error {
    animation: ${fadeAnimation} 0.2s ease-in-out forwards;
    opacity: 0;
    animation-delay: 0.6s;
  }

  .videos-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    padding: 0px 12px;
    gap: 12px;
    animation: ${fadeAnimation} 0.2s ease-in-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
  }
`;
