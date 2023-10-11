import Item from "./Item";

const PackingList = ({initialItems}) => {
  return ( 
    <ul className="list">
{initialItems.map((item) => (
 <Item item={item} key={item.id}/>
))}
    </ul>
   );
}
 
export default PackingList;