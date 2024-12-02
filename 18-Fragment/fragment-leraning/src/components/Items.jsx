import styles  from './Items.module.css'
function Items({Items}) {
  // let {Items} = props;
  return (
    <li className={`list-group-item ${styles.bigblue}`} >
      {Items}
    </li>
  );
}

export default Items;
