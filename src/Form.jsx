import { useState } from "react";

const Form = ({onAddItems}) => {

const [description, setDescription] = useState("")
const [quantity, setQuantity] = useState(1)




const handleSubmit = (e) => {
e.preventDefault()

if(!description) return;
const newItem = {description,quantity,package:false, id:Date.now()}
console.log(newItem)

onAddItems(newItem)

setDescription("")
setQuantity(1)

}


  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={(e) => setQuantity(+e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." onChange={(e) => setDescription(e.target.value)} value={description}   />
      <button>Add</button>
    </form>
  );
};

export default Form;
