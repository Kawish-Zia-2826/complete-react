import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Item1 from "./component/item1";
import './App.css'

function App() {
  return (
    <div className="container text-center">
      <AppName />
      <AddTodo />
      <Item1 />
    </div>
  );
}

export default App;
