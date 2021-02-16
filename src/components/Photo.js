import React from 'react';
import PropTypes from 'prop-types'

function Photo(props) {
  return (
    <div className="col">
      <img src={props.photo.url} alt="" className="picture" />
    </div>
  );
}

Photo.propTupes = {
  photo: PropTypes.shape({
    albumId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string
  })
}

export default Photo;
