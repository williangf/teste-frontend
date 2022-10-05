import classNames from "classnames";
import Container from "./styles";

const InputContainer = ({
  register,
  error,
  touchedField,
  dirtyField,
  name,
  label,
  disabled,
  ...rest
}) => {
  return (
    <Container
      className={classNames("input-container", {
        "input-valid": dirtyField && !error && !disabled,
        "input-error": error && touchedField && !disabled,
        "input-disabled": disabled,
      })}
    >
      {label && <label htmlFor={name}>
        <span>{label}</span>
      </label>}
      <input
        {...register}
        id={name}
        name={name}
        disabled={disabled}
        {...rest}
      />
      {error?.message && !disabled && touchedField && (
        <span className="error-message">
          {error.message}
        </span>
      )}
    </Container>
  );
};

export default InputContainer;
