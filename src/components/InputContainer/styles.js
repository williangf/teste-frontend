import styled from "styled-components";
import { maxWidth } from "@styles/base/breakpoints";

export default styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 24px;
  }

  &.input-error {
    input {
      border-color: ${({ theme }) => theme.colors.danger};
    }

    .error-message {
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.danger};
    }
  }

  &.input-valid {
    .error-message {
      color: ${({ theme }) => theme.colors.danger};
    }
  }

  &.no-margin {
    margin-bottom: 0;
  }

  &.with-inside-button {
    input {
      padding-right: 60px;
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0px 12px;
    background-color: ${({ theme }) => theme.colors.lighter};    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-weight: 300;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  label {
    display: flex;
    align-items: center;
    height: 32px;

    span {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 14px;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  .inside-button {
    position: absolute;
    top: 0;
    right: 0;
  }

  .error-message {
    display: inline-flex;
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    margin-left: 12px;
  }
`;
