import React from 'react';
import { connect } from 'react-redux';
import './Question.css';

class Question extends React.Component {
  render() {
    const { gameActive } = this.props.game;

    const question = gameActive ? gameActive.strings[0].sv.string : null;

    return <div className={`Question`}>{question}</div>;
  }
}

export default connect(store => {
  return {
    game: store.game,
  };
})(Question);
