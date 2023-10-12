import Item from "./Item";

const PackingList = ({initialItems, items}) => {
  return ( 
  <div className="list">
      <ul className="list">
{items.map((item) => (
 <Item item={item} key={item.id}/>
))}
    </ul>
  </div>
   );
}
 
export default PackingList;