import { AiFillDelete } from "react-icons/ai";
const AddItems = ({ todoName, todoDate, onDeleteClicked }) => {
  return (
    <div className="row mt-5">
      <div className="col">
        {todoName}
      </div>
      <div className="col">
        {todoDate}
      </div>
      <div className="col">
        <button className="btn btn-danger" onClick={() => onDeleteClicked(todoName)}>
        <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default AddItems;
