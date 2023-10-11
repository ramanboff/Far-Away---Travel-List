import Item from "./Item";

const PackingList = ({initialItems}) => {
  return ( 
  <div className="list">
      <ul className="list">
{initialItems.map((item) => (
 <Item item={item} key={item.id}/>
))}
    </ul>
  </div>
   );
}
 
export default PackingList;