import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";


// import AddItems from "./component/AddItems";  
import './App.css'
import AddItems from "./component/AddItems";

function App() {
  const TodoItems = [{
    name:"milk",
    DueDate:"20/10/24"
  },
  {
    name:"creamex",
    DueDate:"20/10/24"
  }
]
 
  return (
    <div className="container text-center">
      <AppName />
      <AddTodo />
      <AddItems TodoItems={TodoItems}/>

      
    </div>
  );
}

export default App;
