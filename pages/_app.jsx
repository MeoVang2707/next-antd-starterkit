import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import configStore from 'configStore';
import Wrapper from 'MultyLanguage';

class AppContainer extends App {
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = new Map();

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={<div />} persistor={persistStore(store)}>
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configStore)(AppContainer);
// export default AppContainer;
