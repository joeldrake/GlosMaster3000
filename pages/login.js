import React from 'react';
import { connect } from 'react-redux';
import Layout from '@components/Layout.js';
import Link from 'next/link';

class Login extends React.Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.req && ctx.res) {
      //do server side fetching here
    }
    return {};
  }

  render() {
    return (
      <Layout>
        <style jsx>{`
          .login {
            text-align: center;
          }
        `}</style>
        <div className={`login addPadding`}>
          <h1>Login</h1>
          <Link href={`/`}>
            <a>Go to start page</a>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default connect(store => {
  return {
    session: store.session,
  };
})(Login);
