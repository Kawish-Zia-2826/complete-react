import AddItems from "./AddItems";
const DynamicAddTodo = ({todoitems,onDeleteClicked})=>{
  return(
    <div className="items-container">
      {todoitems.map((item)=>(
        <AddItems key={item} todoDate={item.date} todoName={item.name} onDeleteClicked={onDeleteClicked}/>
      ))}
    </div>
);}

export default DynamicAddTodo;