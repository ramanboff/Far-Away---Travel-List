import Item from "./Item";

const PackingList = ({ initialItems, items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
