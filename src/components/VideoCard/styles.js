import { maxWidth } from "@styles/base/breakpoints";
import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  max-width: calc(20%);
  background-color: ${({ theme }) => theme.colors.lighter};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  ${maxWidth.xl`
    max-width: calc(25%);
  `}

  ${maxWidth.md`
    max-width: calc(50% - 12px);
  `}

  ${maxWidth.xs`
    max-width: 100%;
  `}

  .video-title, .channel-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .thumbnail {
    position: relative;
    padding-bottom: 48%;
    margin-bottom: 4px;
  }

  .video-title {
    font-size: 16px;
  }

  .channel-title {
    font-weight: 300;
    margin-bottom: 12px;
  }

  .video-description {
    flex: 1;
    font-size: 14px;
    word-break: break-all;
    margin-bottom: 12px;
  }
`;
