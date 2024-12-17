import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import './App.css'
import DynamicAddTodo from "./component/DynamicAddTodo";
import { useState } from "react";
import WelcomeMessage from './component/WelcomeMessage'

function App() {
// const todoItemsObjInitial = [{
//   name:"milk",
//   date:"20/10/2024"
// },
// {
//   name:"creamex",
//   date:"20/10/2024"
// },
// {
//   name:"creamex",
//   date:"20/10/2024"
// }]

const [todoItemsObj,setTodoObj] = useState([])
const handleNewObj=(newName,newDate)=>{
  console.log(`new name is ${newName} and Date is ${newDate}`);

  setTodoObj((current)=>[
 ...current,{
      name:newName,
   date:newDate
   }]
  )
}
const handeDelteBtn = (todoItemName)=>{
  const newTodoItems = todoItemsObj.filter(item => item.name !== todoItemName)
    setTodoObj(newTodoItems)
  
  // console.log(`delete btn cliked on:${todoItemName}`);
  
}
 
  return (
    <div className="container text-center">
      <AppName />
      
      <AddTodo onNewItem={handleNewObj}/>
      {todoItemsObj.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <DynamicAddTodo onDeleteClicked={handeDelteBtn} todoitems={todoItemsObj}></DynamicAddTodo>
    

      
    </div>
  );
}

export default App;
