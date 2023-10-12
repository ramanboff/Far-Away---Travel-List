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

  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
  ];
  return <div className="app">
    <Logo/>
    <Form setItems={setItems} onAddItems={handleAddItems}/>
    <PackingList initialItems={initialItems} items={items} onDeleteItem={handleDelete}/>
    <Stats/>
  </div>;
}

export default App;
