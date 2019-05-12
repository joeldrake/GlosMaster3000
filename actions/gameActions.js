export function fetchList(name) {
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
        temporary putting fetched list in both currentLists and lists
      */

      dispatch({
        type: 'UPDATE_LISTS',
        lists: [data],
      });

      dispatch({
        type: 'UPDATE_GAME_ACTIVE',
        gameActive: data,
      });
    } catch (e) {
      if (logToConsole && typeof window !== 'undefined') {
        console.log(e);
      }
    }
  };
}
