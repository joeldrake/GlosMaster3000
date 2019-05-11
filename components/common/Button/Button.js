import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick = e => {
    if (this.props.onClick) this.props.onClick(e);
  };
  modifiers = () => {
    let modifiers = ``;
    if (this.props.transparent) modifiers += ` Button--transparent`;
    if (this.props.round) modifiers += ` Button--round`;

    return modifiers;
  };
  componentDidMount() {
    const { focusOnMount } = this.props;
    if (focusOnMount) {
      const { Button } = this.refs;
      Button.focus();
    }
  }
  render() {
    const { children, className, style } = this.props;
    const addedClassName = className ? ` ${className}` : ``;
    const addedStyle = style || null;
    return (
      <button
        className={`Button` + addedClassName + this.modifiers()}
        style={addedStyle}
        onClick={this.handleClick}
        ref={`Button`}
      >
        {children}
      </button>
    );
  }
}

export default Button;
