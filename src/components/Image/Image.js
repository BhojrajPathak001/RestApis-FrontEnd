import React from "react";

import "./Image.css";

const image = (props) => {
  // Replace backslashes with forward slashes in the imageUrl
  const sanitizedImageUrl = props.imageUrl.replace(/\\/g, "/");
  return (
    <div className="image">
      <img src={sanitizedImageUrl} />
    </div>
  );
};

export default image;
