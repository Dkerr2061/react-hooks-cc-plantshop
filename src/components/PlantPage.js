import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ plants, setPlants] = useState([])
  const [ searchPlants, setSearchPlants ] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(plantData => setPlants(plantData))
  }, [])

  function onSearch(event) {
    setSearchPlants(event.target.value)
  }

  const filteredPlants = plants.filter(plant => {
    if(searchPlants === '') {
      return true
    } else {
      return plant.name.toLowerCase().includes(searchPlants.toLowerCase())
    }
  })

  function addPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        "name": newPlant.name,
        "image": newPlant.image,
        "price": newPlant.price
      })
    })
      .then(res => res.json())
      .then(newPlantData => setPlants([...plants, newPlantData]))
  }

  function editPlantPrice(updatedPrice, id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(updatedPrice)
    })
      .then(res => res.json())
      .then(newUpdatedPriceData => setPlants(plants => plants.map(plant => {
        if(plant.id === newUpdatedPriceData.id) {
          return newUpdatedPriceData
        } else {
          return plant
        }
      })))
  }

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if(res.ok) {
          return setPlants(plants => plants.filter(plant => {
            return plant.id !== id
          }))
        } else {
          return alert('Unable to delete plant, try again later.')
        }
      })
  }

  return (
    <main>
      <NewPlantForm 
        addPlant={addPlant}
      />
      <Search 
        searchPlants={searchPlants} 
        onSearch={onSearch}
      />
      <PlantList 
        plants={filteredPlants} 
        onDeletePlant={deletePlant} 
        onEditPlantPrice={editPlantPrice}
      />
    </main>
  );
}

export default PlantPage;
