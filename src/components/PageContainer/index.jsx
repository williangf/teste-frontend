import Head from "next/head";
import Header from "@components/Header";
import Container from "./styles";

const PageContainer = ({
  title = "Teste iCasei",
  header = true,
  children,
}) => {

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      {header && <Header />}
      {children}
    </Container>
  );
};

export default PageContainer;
