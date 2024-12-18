import styles from './Items.module.css';

function Items({ Items,bought ,handle  }) {
  // let { Items } = props;

  // const handleEvent = (item,event) => {
  //   console.log(event);
    
  //   return console.log(`${item} being bought`);
  // }

  return (
    <li className={`list-group-item container ${styles.bigblue} ${bought && 'active'}`} >
      {Items}
      <button
        className={`btn btn-info ${styles.button}`}
        onClick={handle} // Pass Items as argument here
      >
        buy
      </button>
    </li>
  );
}

export default Items;
