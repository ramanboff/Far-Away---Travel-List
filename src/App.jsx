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

  
  return <div className="app">
    <Logo/>
    <Form setItems={setItems} onAddItems={handleAddItems}/>
    <PackingList initialItems={initialItems} items={items} onDeleteItem={handleDelete}/>
    <Stats/>
  </div>;
}

export default App;
