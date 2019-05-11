import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from './../store.js';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { fetchList } from '@actions/listsActions.js';
import Modal from '@components/common/Modal/Modal.js';
import '@styles/main.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx && ctx.req && ctx.res) {
      //do server side fetching here

      if (ctx.req.headers && ctx.req.headers.host) {
        //site url is needed in action files when fetching server side
        let siteUrl = ctx.req.headers.host;

        ctx.store.dispatch({
          type: 'SITE_URL',
          siteUrl,
        });
      }
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      pageProps,
    };
  }

  componentDidMount() {
    //do stuff on page load that is not serverside rendered here

    this.props.dispatch(fetchList('list1'));
  }

  render() {
    const { Component, pageProps, store } = this.props;
    const { modal } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
          {modal && modal.open ? <Modal /> : null}
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(
  connect(store => {
    return {
      modal: store.modal,
    };
  })(MyApp),
);
