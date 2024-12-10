import { useState } from 'react';
import Items from './Items'
let FoodItem = ({items}) => {
  let [isActive,useActive] = useState([]);
  let onBuyButton = (item,event) =>{
    let newItems = [...isActive,item];
    useActive(newItems);
  }

  return (
      
    <ul className="list-group">
      {items.map((item, index) => (
       <Items
        key={index}
         Items={item}
         bought={isActive.includes(item)}

         handle={(event)=>onBuyButton(item,event)}//()=> console.log(`${item}"clicked"`)
       ></Items>
      ))}
    </ul>
  );
};

export default FoodItem;
