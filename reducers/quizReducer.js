const initialState = {
  quizActive: null,
  quizzes: null,
  quizzesLoaded: false,
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_QUIZZES':
      return {
        ...state,
        quizzes: action.quizzes,
        quizzesLoaded: true,
      };
    case 'UPDATE_QUIZ_ACTIVE':
      return {
        ...state,
        quizActive: action.quizActive,
      };
    default:
      return state;
  }
}
