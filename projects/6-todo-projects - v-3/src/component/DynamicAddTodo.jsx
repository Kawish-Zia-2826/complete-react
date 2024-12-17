import AddItems from "./AddItems";
const DynamicAddTodo = ({todoitems,onDeleteClicked})=>{
  return(
    <div className="items-container">
      {todoitems.map((item,index)=>(
        <AddItems 
        key={index} 
        todoDate={item.date} todoName={item.name} onDeleteClicked={onDeleteClicked}/>
      ))}
    </div>
);}

export default DynamicAddTodo;