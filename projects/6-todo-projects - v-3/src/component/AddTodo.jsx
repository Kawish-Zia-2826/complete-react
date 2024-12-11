import { useState } from 'react';
import styles from './AddTodo.module.css'
function AddTodo({onNewItem}) {

const [todoName,setTodoName] = useState()
const [todoDate,setTodoDate] = useState()

const handleNameChange = (e)=>{
setTodoName(e.target.value)

}
const handleDateChange = (e)=>{
 setTodoDate(e.target.value)
  
  }
  const handleAddBtnClicked = ()=>{
    onNewItem(todoName,todoDate)
    setTodoName("");  // Clear the name
    setTodoDate("");
    

  }
  return ( <div className="row mt-5">
  <div  className={`col ${styles.todoInput}`}>
  <input type="text" placeholder="enter text" value={todoName} onChange={handleNameChange} />
  </div>
  <div className="col">
  <input type="date" placeholder="enter date" value={todoDate} onChange={handleDateChange} />
  </div>
  <div className="col">
   <button className="btn btn-success" onClick={handleAddBtnClicked}>Add</button>
  </div>
</div>
  );
}

export default AddTodo;