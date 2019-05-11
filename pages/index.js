import React from 'react';
import { connect } from 'react-redux';
import Layout from '@components/Layout.js';
import Button from '@components/common/Button/Button.js';
import Link from 'next/link';

class Index extends React.Component {
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
          .main {
            text-align: center;
          }
        `}</style>
        <div className={`main addPadding`}>
          <h1>Glosmaster3000</h1>

          <Link href={`/go`}>
            <Button>Test1</Button>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default connect(store => {
  return {
    layout: store.layout,
    session: store.session,
  };
})(Index);
