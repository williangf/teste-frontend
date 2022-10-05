import styled from "styled-components";

export default styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  .user-details {
    display: flex;
    flex-direction: column;

    & > span {
      font-weight: 300;
    }
  }
`;
