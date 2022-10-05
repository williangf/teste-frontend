import { useSession, signOut } from "next-auth/react";
import Button from "@components/Button";
import Container from "./styles";

function Header() {
  const { data: session } = useSession();

  if (!session) return false;

  return (
    <Container>
      <div className="user-details">
        <p>{session.user.name}</p>
        <span>{session.user.email}</span>
      </div>
      <Button
        type="button"
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Logout
      </Button>
    </Container>
  )
}

export default Header;