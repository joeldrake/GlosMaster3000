const initialState = {
  open: false,
  aboutToClose: false,
  animateOut: null,
  animateIn: null,
  animationTime: 200,
  title: null,
  body: null,
  closeMsg: null,
  customStyle: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'MODAL_OPEN':
      return {
        ...state,
        open: true,
        title: action.title,
        body: action.body,
        closeMsg: action.closeMsg,
        customStyle: action.customStyle,
        animateIn: action.animateIn,
      };
    case 'MODAL_ABOUT_TO_CLOSE':
      return {
        ...state,
        aboutToClose: true,
        animateOut: action.animateOut,
      };
    case 'MODAL_CLOSE':
      return {
        ...state,
        open: false,
        aboutToClose: false,
        title: null,
        body: null,
        closeMsg: null,
        customStyle: null,
        animateOut: null,
        animateIn: null,
      };
    default:
      return state;
  }
}
