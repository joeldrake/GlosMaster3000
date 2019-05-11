import React from 'react';
import { connect } from 'react-redux';
import Answer from '@components/runningQuestions/Answer/Answer.js';
import './Answers.css';

class Answers extends React.Component {
  render() {
    const { listCurrent } = this.props.lists;

    let answer1, answer2, answer3;
    if (listCurrent) {
      answer1 = listCurrent.strings[0].fr.string;
      answer2 = listCurrent.strings[1].fr.string;
      answer3 = listCurrent.strings[2].fr.string;
    }

    return (
      <div className={`Answers`}>
        <Answer index={1}>{answer1}</Answer>
        <Answer index={2}>{answer2}</Answer>
        <Answer index={3}>{answer3}</Answer>
      </div>
    );
  }
}

export default connect(store => {
  return {
    session: store.session,
    lists: store.lists,
  };
})(Answers);
