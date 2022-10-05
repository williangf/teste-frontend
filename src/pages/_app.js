import App from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

import BaseStyle from "@styles/index";
import defaultTheme from "@styles/themes/default";

function AppContainer({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={{ ...defaultTheme }}>
        <BaseStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default AppContainer;

AppContainer.getInitialProps = async (context) => {
  const pageProps = await App.getInitialProps(context);

  return {
    ...pageProps,
  };
};
