import styles  from './Items.module.css'
function Items({Items}) {
  // let {Items} = props;

  const handeEvent = ()=>{
    console.log(`${Items} beign boat `);
    return;  
  }
  return (
    <li className={`list-group-item container ${styles.bigblue}`} >
      {Items}
      <button className={`btn btn-info ${styles.button}`}
      onClick={handeEvent}
      >buy</button>
    </li>
  );
}

export default Items;
