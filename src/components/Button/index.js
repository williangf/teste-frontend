import styled from "styled-components";

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0px 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 2px 2px 0px;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 2px 0px;
  }
`;
