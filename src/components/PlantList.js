import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant, onEditPlantPrice}) {
  const displayPlants = plants.map( plant => {
    return <PlantCard 
              key={plant.id} 
              plant={plant} 
              onDeletePlant={onDeletePlant} 
              onEditPlantPrice={onEditPlantPrice}
            />
  })
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
