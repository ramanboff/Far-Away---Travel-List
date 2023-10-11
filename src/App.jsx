import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];
  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList initialItems={initialItems}/>
    <Stats/>
  </div>;
}

export default App;
