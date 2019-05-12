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
          .main {
            text-align: center;
          }
        `}</style>
        <div className={`main addPadding`}>
          <h1>QuizMaster3000</h1>

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
