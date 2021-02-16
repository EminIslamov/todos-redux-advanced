import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Album(props) {
  return (
    <li>
      <Link to={`/${props.album.id}`}>
        <div>{props.album.title}</div>
      </Link>
    </li>
  );
}

Album.propTypes = {
  album: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string
  })
}

export default Album;
