import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {

  const [items, setItems] = useState([])
  function handleAddItems(item){
    setItems((items) => [...items, item])
    }

function handleDelete(id){
  setItems((items) => items.filter((item) => item.id !== id) )
}

function handleToggleItem(id){
setItems((items) => items.map((item) => item.id === id? {...item, packed:!item.packed} : item))
}
  
  return <div className="app">
    <Logo/>
    <Form setItems={setItems} onAddItems={handleAddItems}/>
    <PackingList  items={items} onDeleteItem={handleDelete} onToggleItem={handleToggleItem}/>
    <Stats/>
  </div>;
}

export default App;
