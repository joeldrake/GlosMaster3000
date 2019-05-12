import React from 'react';
import { connect } from 'react-redux';
import './Question.css';

class Question extends React.Component {
  render() {
    const { quizActive } = this.props.quiz;

    const question = quizActive ? quizActive.strings[0].sv.string : null;

    return <div className={`Question`}>{question}</div>;
  }
}

export default connect(store => {
  return {
    quiz: store.quiz,
  };
})(Question);
