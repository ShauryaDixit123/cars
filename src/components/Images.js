import React from "react";
import "./Image.css";

const ImageDisplay = (props) => {
  //   console.log(props);
  const images = props.images.map(({ desription, id, urls }) => {
    return <img alt={desription} key={id} src={urls.regular}></img>;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageDisplay;
