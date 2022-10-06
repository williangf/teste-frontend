import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};

  & > svg {
    margin-bottom: 12px;
  }

  & > h1 {
    font-size: 20px;
  }
`;
