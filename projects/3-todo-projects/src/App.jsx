import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import './App.css'
import DynamicAddTodo from "./component/DynamicAddTodo";

function App() {
const todoItemsObj = [{
  name:"milk",
  date:"20/10/2024"
},
{
  name:"creamex",
  date:"20/10/2024"
},
{
  name:"creamex",
  date:"20/10/2024"
}]
 
  return (
    <div className="container text-center">
      <AppName />
      <AddTodo />
      <DynamicAddTodo todoitems={todoItemsObj}></DynamicAddTodo>
    

      
    </div>
  );
}

export default App;
