import style from  './App.module.css'
import ButtonContainer from './components/ButttonContainer'
import Display from './components/Display'
import { useState } from 'react';
function App() {
let [calVal,setCalVal] = useState("")
const onButtonClicked  = (buttonText) =>{
  console.log(buttonText)
  if(buttonText === "C" ){
    setCalVal("")
  }else if(buttonText === "="){
    const result = eval(calVal)
    setCalVal(result)
  }
  else{
  const displayVal  = calVal + buttonText
  setCalVal(displayVal)}


}
  return (
    <div className={style.calculator} >
    <Display displayValue={calVal}></Display>
    <ButtonContainer onButtonClicked ={onButtonClicked}></ButtonContainer>
   
    </div>
  )
}

export default App
