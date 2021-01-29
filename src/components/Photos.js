import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Photo from './Photo'
import { setFilterPhotos } from '../redux/actions'

function Photos (props) {
  const photos = useSelector(state => state.photos);
  const selectedUserId = useSelector(state => state.selectedUserId)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch();

  const handleFilterPhotos = (e) => {
    dispatch(setFilterPhotos(e.target.value));
  }

  const filteredPhotos = photos.filter(photo => {
    if (selectedUserId === photo.albumId && photo.title.indexOf(filter) > -1) {
      return true;
    }

    return false;
  })

  if (selectedUserId === null){
    return(
      <div className="choose-album">
        Выберите альбом слева
      </div>
    )
  }

  return (
    <div className="photos">
      <input
        className='input'
        type="text"
        placeholder={'Введите заголовок'}
        value={filter}
        onChange={handleFilterPhotos}
      />
      <div className="flex photos-and-title">
        {filteredPhotos.map(photo => {
          return (
            <Photo photo={photo} key={photo.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Photos;