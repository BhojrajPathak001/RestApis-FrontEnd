import React from "react";

import "./Image.css";

const image = (props) => {
  // Replace backslashes with forward slashes in the imageUrl
  const sanitizedImageUrl = props.imageUrl.replace(/\\/g, '/');
  
  console.log(sanitizedImageUrl);
  return (
    <div
      className="image"
      style={{
        backgroundImage: `url('${sanitizedImageUrl}')`,
        backgroundSize: props.contain ? "contain" : "cover",
        backgroundPosition: props.left ? "left" : "center",
      }}
    />
  );
};


export default image;
