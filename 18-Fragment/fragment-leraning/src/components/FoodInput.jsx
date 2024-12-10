import style from './FoodInput.module.css'
const FoodInput = ({handleonKeyDown})=>{
  // const handleEvent = (e)=>{
  //     console.log(e.target.value);
      
  // }
return(
  <input type="text" placeholder='enter your name'
  className={style.FoodInput}
  onKeyDown={handleonKeyDown}/>
);
}

export default FoodInput;