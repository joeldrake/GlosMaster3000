import React from 'react';
import { connect } from 'react-redux';
import Question from '@components/runningQuestions/Question/Question.js';
import Answers from '@components/runningQuestions/Answers/Answers.js';
import './Questions.css';

class Questions extends React.Component {
  render() {
    return (
      <div className={`Questions`}>
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
})(Questions);
