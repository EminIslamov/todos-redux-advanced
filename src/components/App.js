import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadAlbums, loadPhotos } from '../redux/actions';
import Albums from './Albums';
import Photos from './Photos';
import { Route } from 'react-router-dom';

function App() {
  const loadingAlbums = useSelector((state) => state.albums.loading);
  const loadingPhotos = useSelector((state) => state.photos.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos());
  }, []);

  if (loadingAlbums || loadingPhotos) {
    return <div>Идет загрузка..</div>;
  }

  return (
    <div className="container">
      <Albums />
      <Route path="/:id?">
        <Photos />
      </Route>
    </div>
  );
}

export default App;
