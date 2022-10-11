import styled from "styled-components";

export default styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .login-container {
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 24px;

    .logo {
      color: #666;
      margin-bottom: 24px;
    }

    .login-form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;
