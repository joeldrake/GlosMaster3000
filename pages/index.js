import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '@components/Layout.js';
import Button from '@components/common/Button/Button.js';
import InlineSVG from 'svg-inline-react';
import { svgTextLogo } from '@utils/svgImages.js';

class Index extends React.Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.req && ctx.res) {
      //do server side fetching here
    }
    return {};
  }

  handleQuizClick = quiz => {
    this.props.dispatch({
      type: 'UPDATE_QUIZ_ACTIVE',
      quizActive: quiz,
    });
  };

  render() {
    const { quizzes } = this.props.quiz;
    return (
      <Layout>
        <style jsx>{`
          .main__logo {
            margin: 1rem auto 2rem auto;
            max-width: var(--maxWidth);
          }
        `}</style>
        <div className={`main addPadding`}>
          <div className={`main__logo`}>
            <InlineSVG src={svgTextLogo} alt={`QuizMaster3000`} />
          </div>

          {quizzes
            ? quizzes.map((quiz, i) => {
                return (
                  <Link href={`/go`} key={i}>
                    <Button onClick={() => this.handleQuizClick(quiz)}>
                      {quiz.name}
                    </Button>
                  </Link>
                );
              })
            : null}
        </div>
      </Layout>
    );
  }
}

export default connect(store => {
  return {
    layout: store.layout,
    session: store.session,
    quiz: store.quiz,
  };
})(Index);
