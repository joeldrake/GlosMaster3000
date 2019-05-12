import React from 'react';
import { connect } from 'react-redux';
import Answer from '@components/quiz/Answer/Answer.js';
import './Answers.css';

class Answers extends React.Component {
  render() {
    const { quizActive } = this.props.quiz;

    let answer1, answer2, answer3;
    if (quizActive) {
      answer1 = quizActive.strings[0].fr.string;
      answer2 = quizActive.strings[1].fr.string;
      answer3 = quizActive.strings[2].fr.string;
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
    quiz: store.quiz,
  };
})(Answers);
