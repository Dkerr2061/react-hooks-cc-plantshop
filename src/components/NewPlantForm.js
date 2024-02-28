import React, {useState} from "react";

function NewPlantForm({ addPlant }) {
  const [ newPlant, setNewPlant ] = useState({
    name: '',
    image: '',
    price: ''
  })

  function addNewPlant(event) {
    setNewPlant({...newPlant, [event.target.name]: event.target.value})
  }
  
  function handleNewPlantSubmit(event) {
    event.preventDefault()
    const priceOfItem = parseFloat(newPlant.price)
    
     addPlant({...newPlant, price: priceOfItem})
    // addNewPlant({...newPlant})
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={addNewPlant}/>
        <input type="text" name="image" placeholder="Image URL" onChange={addNewPlant}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={addNewPlant}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
