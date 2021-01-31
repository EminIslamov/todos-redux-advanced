import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbum } from '../redux/actions'


function Album (props) {
  const  dispatch = useDispatch()

  const handleSelectAlbum = () => {
    dispatch(selectAlbum(props.album.id));
  }

  const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId)

  return (
    <li
      onClick={handleSelectAlbum}>
      <div className={selectedAlbumId === props.album.id ? 'select' : ''}>
        {props.album.title}
      </div>
    </li>
  )
}

export default Album