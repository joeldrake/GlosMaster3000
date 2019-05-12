import React from 'react';
import { connect } from 'react-redux';
import Answer from '@components/game/Answer/Answer.js';
import './Answers.css';

class Answers extends React.Component {
  render() {
    const { gameActive } = this.props.game;

    let answer1, answer2, answer3;
    if (gameActive) {
      answer1 = gameActive.strings[0].fr.string;
      answer2 = gameActive.strings[1].fr.string;
      answer3 = gameActive.strings[2].fr.string;
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
    game: store.game,
  };
})(Answers);
