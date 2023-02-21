import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <main>
      <NewPlantForm 
      onAddPlant={handleAddPlant}/>
      <Search 
      search={search}
      onSearch={setSearch}/>
      <PlantList 
      plants={displayedPlants}
      />
    </main>
  );
}

export default PlantPage;
