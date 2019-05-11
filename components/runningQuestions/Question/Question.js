import React from 'react';
import { connect } from 'react-redux';
import './Question.css';

class Question extends React.Component {
  render() {
    const { listCurrent } = this.props.lists;

    const question = listCurrent ? listCurrent.strings[0].sv.string : null;

    return <div className={`Question`}>{question}</div>;
  }
}

export default connect(store => {
  return {
    lists: store.lists,
  };
})(Question);
