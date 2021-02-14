export const loadAlbums = () => {
  return (dispatch) => {
    dispatch({ type: 'load/albums/start' });

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/albums/success',
          payload: json,
        });
      });
  };
};

export const loadPhotos = () => {
  return (dispatch) => {
    dispatch({ type: 'load/photos/start' });

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'load/photos/success',
          payload: json,
        });
      });
  };
};

export const setFilterPhotos = (filter) => {
  return {
    type: 'filter/set',
    payload: filter,
  };
};
