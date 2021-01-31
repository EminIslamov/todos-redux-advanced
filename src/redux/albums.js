
const initialState = {
  selectedAlbumId: null,
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

    case 'album/select':
      return {
        ...state,
        selectedAlbumId: action.payload
      }


    default:
      return state;
  }
}



