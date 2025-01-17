import React, { useState } from "react";

function PlantCard({ name, image, price, plant, onDeleteClick }) {
  const { id } = plant;
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock(!inStock)
  }

  function handleDeleteClick() {
    onDeleteClick(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
