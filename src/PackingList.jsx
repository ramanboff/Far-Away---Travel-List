import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem ,onToggleItem}) => {

const [sortBy, setSortBy] = useState("input")




  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
