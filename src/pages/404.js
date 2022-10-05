import Link from "next/link";
import PageContainer from "@components/PageContainer";
import Container from "@styles/pages/404";
import { TbError404 } from "react-icons/tb";

export default function Custom404() {
  return (
    <PageContainer title="404 - Página não encontrada" header={false}>
      <Container>
        <TbError404 size={124} />
        <h1>
          Página não encontrada
        </h1>
        <Link href="/">
          <a>Voltar para a home</a>
        </Link>
      </Container>
    </PageContainer>
  );
}
