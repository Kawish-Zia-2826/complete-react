import { useState,useRef } from 'react';
import { MdAdd } from "react-icons/md";
import styles from './AddTodo.module.css'
function AddTodo({onNewItem}) {

  const todoNameElem = useRef()
  const todoDueDateElem = useRef()
// const [todoName,setTodoName] = useState("")
// const [todoDate,setTodoDate] = useState("")
// const noOfUpdt = useRef(0)

// const handleNameChange = (e)=>{
// // setTodoName(e.target.value)
// // noOfUpdt.current += 1


// }
// const handleDateChange = (e)=>{
// //  setTodoDate(e.target.value)
// //  console.log(noOfUpdt.current);
 

  
//   }
  const handleAddBtnClicked = (error)=>{
    error.preventDefault()
    const todoName  = todoNameElem.current.value;
    const todoDate  = todoDueDateElem.current.value;
    todoNameElem.current.value =""
   todoDueDateElem.current.value =""

    onNewItem(todoName,todoDate)
    // setTodoName("");  // Clear the name
    // setTodoDate("");
    

  }
  return ( <form  onSubmit={handleAddBtnClicked} className="row mt-5">
  <div  className={`col ${styles.todoInput}`}>
  <input
  ref={todoNameElem} type="text" placeholder="enter text"   />
  </div>
  <div className="col">
  <input
  ref={todoDueDateElem} type="date" placeholder="enter date"   />
  </div>
  <div className="col">
   <button type='submit' className="btn btn-success"><MdAdd /></button>
  </div>
</form>
  );
}

export default AddTodo;