import React from 'react';
import { connect } from 'react-redux';
import Answer from '@components/runningQuestions/Answer/Answer.js';
import './Answers.css';

class Answers extends React.Component {
  render() {
    return (
      <div className={`Answers`}>
        <Answer index={1}>Svar 1</Answer>
        <Answer index={2}>Svar 2</Answer>
        <Answer index={3}>Svar 3</Answer>
      </div>
    );
  }
}

export default connect(store => {
  return {
    session: store.session,
  };
})(Answers);
