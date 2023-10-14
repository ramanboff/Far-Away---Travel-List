import Item from "./Item";

const PackingList = ({ items, onDeleteItem ,onToggleItem}) => {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
