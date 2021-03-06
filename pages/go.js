import React from 'react';
import { connect } from 'react-redux';
import InlineSVG from 'svg-inline-react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '@components/Layout.js';
import Button from '@components/common/Button/Button.js';
import Quiz from '@components/quiz/Quiz/Quiz.js';
import { svgChevronLeft } from '@utils//svgImages.js';
import { openModal, closeModal } from '@actions/modalActions.js';

class Go extends React.Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.req && ctx.res) {
      //do server side fetching here
    }
    return {};
  }

  handleBackClick = () => {
    this.props.dispatch(
      openModal({
        title: `Vill du gå till första sidan?`,
        body: (
          <div>
            <Link href={`/`}>
              <Button onClick={() => this.props.dispatch(closeModal())}>
                Gör det
              </Button>
            </Link>
          </div>
        ),
      }),
    );
  };

  componentDidMount() {
    const { quizActive } = this.props.quiz;
    if (!quizActive) {
      Router.push(`/`);
    }
  }

  render() {
    const { quizActive } = this.props.quiz;
    const backButtonStyle = {
      position: `absolute`,
      top: `2rem`,
      left: `1rem`,
    };

    return (
      <Layout>
        <div className={`Go`}>
          <Button
            onClick={this.handleBackClick}
            transparent={true}
            round={true}
            style={backButtonStyle}
          >
            <InlineSVG src={svgChevronLeft} alt={`Tillbaka`} />
          </Button>

          {quizActive ? <Quiz /> : null}
        </div>
      </Layout>
    );
  }
}

export default connect(store => {
  return {
    quiz: store.quiz,
  };
})(Go);
