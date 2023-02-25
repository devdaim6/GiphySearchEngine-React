/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function GiphyItem(props) {
  let images = props.images;
  const imgSize = {
    height: "100%",
    width: "100%"
  }
  return (
    <>
      <div className=" card" style={{ width: "7.5rem", height: "5rem" }}>
        <img src={images} style={imgSize} className="card-img " alt="Loading..." />
      </div>
    </>
  )
}

export default GiphyItem