import React, {useState} from "react";

function PlantCard({plant, onDeletePlant, onEditPlantPrice}) {
  const [ inStock, setInstock ] = useState(true)
  const [ updatePrice, setUpdatePrice] = useState('')
  
  function isInStock() {
    setInstock(inStock => !inStock)
  }

  function handleDeleteButton() {
    onDeletePlant(plant.id)
  }

  function handlePriceChange(event) {
    setUpdatePrice(event.target.value)
  }

  function handleNewPriceSubmit(event) {
    event.preventDefault()
    const parsedPrice = parseFloat(updatePrice)
    onEditPlantPrice({price: parsedPrice}, plant.id)
  }
  
 
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        <form onSubmit={handleNewPriceSubmit}>
          <input className="update-price" type="number" step="0.01" placeholder="Update Price" onChange={handlePriceChange}/>
          <button>Update Price</button>
        </form>
      {inStock ? (
        <button className="primary" onClick={isInStock}>In Stock</button>
      ) : (
        <button onClick={isInStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteButton}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
