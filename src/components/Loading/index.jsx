import PropTypes from "prop-types";
import Container from "./styles";

export default function Loading({ bigger }) {
  return (
    <Container bigger={bigger}>
      <div className="shimmer-animation thumbnail"></div>
      <div className="content-container">
        <div className="shimmer-animation title-line"></div>
        <div className="shimmer-animation title-line shorter"></div>
        <div className="shimmer-animation content-line"></div>
        <div className="shimmer-animation content-line"></div>
        <div className="shimmer-animation content-line"></div>
        <div className="shimmer-animation content-line"></div>
        <div className="shimmer-animation content-line shorter"></div>
      </div>
    </Container>
  )
}

Loading.propTypes = {
  bigger: PropTypes.bool,
};