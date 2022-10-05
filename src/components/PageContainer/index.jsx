import Head from "next/head";
import Header from "@components/Header";

const PageContainer = ({
  title = "Teste iCasei",
  header = true,
  children,
}) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {header && <Header />}
      {children}
    </>
  );
};

export default PageContainer;
