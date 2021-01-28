import React from 'react'

function Photo (props) {
  return (
    <div className="photos-and-title">
      <div className="title">
        {props.photo.title}
      </div>
      <div className="img">
        <img src={props.photo.url} alt=""/>
      </div>
    </div>
  )
}

export default Photo