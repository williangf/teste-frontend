import Container from "./styles";

export default function DisplayMessage({ message, icon }) {
  return (
    <Container>
      {icon}
      <h1>{message}</h1>
    </Container>
  )
}