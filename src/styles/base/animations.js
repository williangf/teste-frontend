import { keyframes } from "styled-components";

export const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const moveUpAnimation = keyframes`
  0% {
    top: 0;
    bottom: 0;
    transform: rotateX(45deg);
  }
  100% {
    top: 148px;
    bottom: 100%;
    transform: rotateX(0deg);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;
