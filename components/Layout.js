import React from 'react';
import Head from './Head';
//import { initGA, logPageView } from './../utils/Analytics.js';

class Layout extends React.Component {
  componentDidMount() {
    /*
    if (
      window.location.host !== 'localhost:3000'
    ) {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      //every page that has <Layout /> will now trigger a logPageView
      logPageView();
    }
    */
  }

  render() {
    return (
      <div className={`siteWrapper`}>
        <Head />

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
