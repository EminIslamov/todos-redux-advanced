import React from 'react'

function Photo (props) {
  return (
    <div className="col">
        <img src={props.photo.url} alt=""
             className="picture"
        />
    </div>
  )
}

export default Photo