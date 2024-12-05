
const AddItems = ({todoName,todoDate}) =>{
return(   <div className="row mt-5">
  <div className="col">
   {todoName}
  </div>
  <div className="col">
   {todoDate}
  </div>
  <div className="col">
   <button className="btn btn-danger">delete</button>
  </div>
</div>


);
}

export default AddItems;