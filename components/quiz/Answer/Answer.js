import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '@actions/modalActions.js';
import Button from '@components/common/Button/Button.js';
import './Answer.css';

class Answer extends React.Component {
  handleClick = () => {
    const { index } = this.props;
    this.alertModal(index);
  };

  alertModal(index) {
    this.props.dispatch(
      openModal({
        body: <div>Du klickade på Svar {index}</div>,
        closeMsg: 'Ok',
      }),
    );
  }

  render() {
    const { children } = this.props;
    return (
      <div className={`Answer`}>
        <Button onClick={this.handleClick}>{children}</Button>
      </div>
    );
  }
}

export default connect()(Answer);
