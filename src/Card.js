import React from "react";

const Card = ({ images }) => {
  return (
    <>
      {images.map((img, i) => (
        <div
          className="card"
          key={i}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
        ></div>
      ))}
    </>
  );
};

export default Card;
