
const initialState = {
  filter: "",
  photos: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'load/photos/start':
      return {
        ...state,
        loading: true
      }

    case 'load/photos/success':
      return {
        ...state,
        photos: action.payload,
        loading: false
      }

    case 'filter/set':
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
}



