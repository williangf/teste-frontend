import Head from "next/head";
import PropTypes from "prop-types";
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

PageContainer.propTypes = {
  title: PropTypes.string,
  header: PropTypes.bool,
  children: PropTypes.node,
};
