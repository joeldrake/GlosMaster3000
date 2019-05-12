import React from 'react';
import { connect } from 'react-redux';
import Question from '@components/game/Question/Question.js';
import Answers from '@components/game/Answers/Answers.js';
import './Game.css';

class Game extends React.Component {
  render() {
    return (
      <div className={`Game`}>
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
})(Game);
