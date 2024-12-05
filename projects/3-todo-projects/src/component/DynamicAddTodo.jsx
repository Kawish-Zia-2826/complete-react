import AddItems from "./AddItems";
const DynamicAddTodo = ({todoitems})=>{
  return(
    <div className="items-container">
      {todoitems.map((item)=>(
        <AddItems key={item} todoDate={item.date} todoName={item.name}/>
      ))}
    </div>
);}

export default DynamicAddTodo;