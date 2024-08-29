import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card" key={item.id}>
        <h5>{item.name}</h5>
        <span>{item.price}</span>
        <span>{item.brand}</span>
        <span>{item.rating}</span>
        <span>{item.details}</span>
      </div>
    </>
  );
};

export default Card;
