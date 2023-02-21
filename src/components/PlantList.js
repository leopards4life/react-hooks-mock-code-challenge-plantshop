import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeleteClick }) {
  const plantCards = plants.map(plant => (
    <PlantCard 
    plant={plant}
    key={plant.id}
    name={plant.name}
    image={plant.image}
    price={plant.price}
    onDeleteClick={onDeleteClick}
    />
  ))

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
