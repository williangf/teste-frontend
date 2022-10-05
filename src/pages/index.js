import { getSession } from "next-auth/react";
import PageContainer from "@components/PageContainer";
import Container from "@styles/pages/login";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Home() {
  return (
    <PageContainer title="Home">
      <Container></Container>
    </PageContainer>
  );
}
