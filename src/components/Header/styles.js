import styled from "styled-components";

export default styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 82px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.lighter};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  z-index: 10;

  .user-details {
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 80px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;

    & > span {
      font-weight: 300;
    }
  }
`;
