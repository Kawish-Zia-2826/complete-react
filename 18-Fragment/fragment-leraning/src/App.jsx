import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from "react";
function App() {

// var a = []
// var a = []
let [a,seta] = useState([]);
  // "daal","makhni","chini","roti","sanu"

// var b  =  : null
// var text = "heres a text"
// let textStateArr = useState("food enterd");
// let text = textStateArr[0]
// let setText = textStateArr[1]
// let [text,setText] = useState("food enterd") 
// console.log(`current val of text state ${text}`);


const onkeydown = (e)=>{
  if(e.key === 'Enter'){
      let newFoodItem = e.target.value
      let newItems = [...a, newFoodItem]
      seta(newItems) 
      // console.log("new foood " + newFoodItem);
      
  }
  console.log(e.target.value);
  // text =e.target.value
  // setText(e.target.value)

  
}
  return (
    <>
    <Container>
     <div>this is our list group</div>
     
  <FoodInput handleonKeyDown={onkeydown}></FoodInput>
  <ErrorMessage items={a}></ErrorMessage>  
  <FoodItems items={a}></FoodItems>
  
    </Container>
    {/* <Container>
    <p>this is our healthy food</p>
    </Container> */}
    </>
  )
}

export default App
