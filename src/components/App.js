import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadAlbums, loadPhotos } from '../redux/actions'
import Albums from './Albums'
import Photos from './Photos'

function App() {
  const loadingAlbums = useSelector(state => state.loadingAlbums);
  const loadingPhotos = useSelector(state => state.loadingPhotos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos());
  }, [])

  if ( loadingAlbums || loadingPhotos ) {
    return(
      <div>
        Идет загрузка..
      </div>
    )
  }

  return (
    <div className="container">
      <Albums />
      <Photos />
    </div>
  );
}

export default App;
