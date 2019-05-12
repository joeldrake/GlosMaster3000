import React from 'react';
import { connect } from 'react-redux';
import Question from '@components/quiz/Question/Question.js';
import Answers from '@components/quiz/Answers/Answers.js';
import './Quiz.css';

class Quiz extends React.Component {
  render() {
    return (
      <div className={`Quiz`}>
        <Question />
        <Answers />
      </div>
    );
  }
}

export default connect(store => {
  return {
    session: store.session,
  };
})(Quiz);
