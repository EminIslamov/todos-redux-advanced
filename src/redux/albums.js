
const initialState = {
  albums: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'load/albums/start':
      return {
        ...state,
        loading: true
      }

    case 'load/albums/success':
      return {
        ...state,
        albums: action.payload,
        loading: false
      }

    default:
      return state;
  }
}



