import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import InlineSVG from 'svg-inline-react';
import Button from '@components/common/Button/Button.js';
import { svgCross } from '@utils/svgImages.js';
import { closeModal } from '@actions/modalActions.js';

class Modal extends React.Component {
  componentDidMount() {
    this.addEventListeners();
  }

  componentWillUnmount() {
    this.unmounted = true;
    this.removeEventListeners();
  }

  addEventListeners() {
    document.addEventListener('click', this.handlePageClick);
  }

  removeEventListeners() {
    document.removeEventListener('click', this.handlePageClick);
  }

  handlePageClick = e => {
    const target = e.target;

    if (!target) {
      return;
    }

    const wrapperClick = target.classList.contains('modalDarken');

    if (wrapperClick) {
      this.props.dispatch(closeModal());
    }
  };

  handleCloseModal = e => {
    e.preventDefault();
    this.props.dispatch(closeModal());
  };
  render() {
    const asPath = Router && Router.router ? Router.router.asPath : '/';

    const {
      title,
      body,
      closeMsg,
      customStyle,
      aboutToClose,
    } = this.props.modal;

    const closeButtonStyle = {
      position: `absolute`,
      top: `5px`,
      right: `5px`,
    };

    return (
      <div className={`modalDarken` + (aboutToClose ? ` aboutToClose` : ``)}>
        <style global jsx>{`
          body {
            height: 100vh;
            overflow: hidden;
          }
        `}</style>

        <style jsx>{`
          --modal-animation-duration: 0.2s;

          .modalDarken {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 20;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            vertical-align: middle;
            padding: 40px 20px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            animation-name: fadeIn;
            animation-duration: var(--modal-animation-duration);
            transition: opacity var(--modal-animation-duration);
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .aboutToClose {
            opacity: 0;
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          .modal {
            position: relative;
            background-color: white;
            width: 100%;
            max-width: 500px;
            margin: auto;
            text-align: center;
            border: 1px solid #d7e0df;
            border-radius: 5px;
            overflow-x: auto;
            padding: 20px;
            box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.33);
            animation-name: fromAbove;
            animation-duration: var(--modal-animation-duration);
          }

          @keyframes fromAbove {
            0% {
              transform: translateY(-40px);
            }
            100% {
              transform: translateY(0);
            }
          }

          .aboutToClose .modal {
            animation-name: toAbove;
          }

          @keyframes toAbove {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-40px);
            }
          }

          .modalTitle {
            min-height: 31px;
          }

          .modalBody {
            min-height: 85px;
          }

          .modalFooter {
            text-align: center;
          }
        `}</style>

        <div className={`modal`} style={customStyle}>
          <Button
            onClick={this.handleCloseModal}
            transparent={true}
            round={true}
            style={closeButtonStyle}
          >
            <InlineSVG src={svgCross} alt={`close`} />
          </Button>
          <h2 className={`modalTitle`}>{title}</h2>
          <div className={`modalBody`}>{body}</div>

          <div className={`modalFooter`}>
            {closeMsg ? (
              <Button
                onClick={this.handleCloseModal}
                transparent={true}
                focusOnMount={true}
              >
                {closeMsg}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => {
  return {
    modal: store.modal,
  };
})(Modal);
