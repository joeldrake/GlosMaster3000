export function fetchQuizzes(name) {
  return async (dispatch, getState) => {
    if (!name) return;

    const { logToConsole } = getState().session;

    const url = `/static/data/${name}.json`;
    const res = await fetch(url);

    try {
      let data = await res.json();

      if (logToConsole && typeof window !== 'undefined') {
        console.log(data);
      }

      /*
        temporary putting fetched list in both quizActive and quizzes
      */

      dispatch({
        type: 'UPDATE_QUIZZES',
        quizzes: [data],
      });
    } catch (e) {
      if (logToConsole && typeof window !== 'undefined') {
        console.log(e);
      }
    }
  };
}
