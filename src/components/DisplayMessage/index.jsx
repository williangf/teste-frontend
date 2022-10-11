import PropTypes from "prop-types";
import Container from "./styles";

export default function DisplayMessage({ message, icon }) {
  return (
    <Container>
      {icon}
      <h1>{message}</h1>
    </Container>
  )
}

DisplayMessage.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.element,
};