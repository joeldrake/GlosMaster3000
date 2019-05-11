export function openModal({ title, body, closeMsg, customStyle }) {
  return async (dispatch, getState) => {
    dispatch({
      type: 'MODAL_OPEN',
      title,
      body,
      closeMsg,
      customStyle,
    });
  };
}

export function closeModal({ animateOut = null } = {}) {
  return async (dispatch, getState) => {
    dispatch({ type: 'MODAL_ABOUT_TO_CLOSE', animateOut });

    const { animationTime } = getState().modal;

    await new Promise(resolve => setTimeout(resolve, animationTime));

    dispatch({ type: 'MODAL_CLOSE' });
  };
}
