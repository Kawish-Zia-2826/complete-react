import style from './FoodInput.module.css'
const FoodInput = ({handleEvent})=>{
  // const handleEvent = (e)=>{
  //     console.log(e.target.value);
      
  // }
return(
  <input type="text" placeholder='enter your name'
  className={style.FoodInput}
  onChange={handleEvent}/>
);
}

export default FoodInput;