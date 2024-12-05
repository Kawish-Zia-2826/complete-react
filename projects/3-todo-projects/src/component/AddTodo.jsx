import styles from './AddTodo.module.css'
function AddTodo() {
  return  <div className="row mt-5">
  <div  className={`col ${styles.todoInput}`}>
  <input type="text" placeholder="enter text" />
  </div>
  <div className="col">
  <input type="text" placeholder="enter date" />
  </div>
  <div className="col">
   <button className="btn btn-success">Add</button>
  </div>
</div>
}

export default AddTodo;