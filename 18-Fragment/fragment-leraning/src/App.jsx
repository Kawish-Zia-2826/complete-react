import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from "react";
function App() {

// var a = []
var a = ["daal","makhni","chini","roti","sanu"]
// var b  =  : null
// var text = "heres a text"
let textStateArr = useState("food enterd");
let text = textStateArr[0]
let setText = textStateArr[1]

console.log(`current val of text state ${text}`);


const handleEvent = (e)=>{
  console.log(e.target.value);
  text =e.target.value
  setText(e.target.value)

  
}
  return (
    <>
    <Container>
     <div>this is our list group</div>
     <p>{text}</p>
  <ErrorMessage items={a}></ErrorMessage>  
  <FoodInput handleEvent={handleEvent}></FoodInput>
  <FoodItems items={a}></FoodItems>
  
    </Container>
    {/* <Container>
    <p>this is our healthy food</p>
    </Container> */}
    </>
  )
}

export default App
