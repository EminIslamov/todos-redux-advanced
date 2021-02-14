import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Photo from './Photo';
import { setFilterPhotos } from '../redux/actions';
import { useParams } from 'react-router-dom';
function Photos(props) {
  const photos = useSelector((state) => state.photos.photos);

  const id = parseInt(useParams().id);

  const filter = useSelector((state) => state.photos.filter);

  const dispatch = useDispatch();

  const handleFilterPhotos = (e) => {
    dispatch(setFilterPhotos(e.target.value));
  };

  const filteredPhotos = photos.filter((photo) => {
    if (id === photo.albumId && photo.title.indexOf(filter) > -1) {
      return true;
    }

    return false;
  });

  if (!id) {
    return <div className="choose-album">Выберите альбом слева</div>;
  }

  return (
    <div className="photos">
      <input
        className="input"
        type="text"
        placeholder={'Введите заголовок'}
        value={filter}
        onChange={handleFilterPhotos}
      />
      <div className="flex photos-and-title">
        {filteredPhotos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </div>
    </div>
  );
}

export default Photos;
