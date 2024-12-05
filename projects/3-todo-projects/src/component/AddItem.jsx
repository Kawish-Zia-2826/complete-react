function AddItem({todoName,todoDate}) {
  // let todoName = "buy milk";
  // let todoDate = "5-4-2020";
  return  <div className="row mt-5">
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
}

export default AddItem;