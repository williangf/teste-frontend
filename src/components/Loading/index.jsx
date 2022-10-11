import Container from "./styles";

export default function Loading({ bigger }) {
  return (
    <Container bigger={bigger}>
      <div class="shimmer-animation thumbnail"></div>
      <div class="content-container">
        <div class="shimmer-animation title-line"></div>
        <div class="shimmer-animation title-line shorter"></div>
        <div class="shimmer-animation content-line"></div>
        <div class="shimmer-animation content-line"></div>
        <div class="shimmer-animation content-line"></div>
        <div class="shimmer-animation content-line"></div>
        <div class="shimmer-animation content-line shorter"></div>
      </div>
    </Container>
  )
}