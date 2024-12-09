import Items from './Items'
let FoodItem = ({items}) => {

  return (
    
    <ul className="list-group">
      {items.map((item, index) => (
       <Items
        key={index}
         Items={item}
         handle={()=> console.log(`${item}"clicked"`)}
       ></Items>
      ))}
    </ul>
  );
};

export default FoodItem;
