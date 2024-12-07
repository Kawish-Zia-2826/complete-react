import style from './ButttonContainer.module.css'
const ButtonContainer = ()=>{
  const ButtonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return(
  <div className={style.buttonsContainer}>
    {ButtonName.map(buttons => <button key={buttons} className={style.button}>{buttons}</button>)}
  {/* <button className={style.button}>c</button>
  <button className={style.button}>1</button>
  <button className={style.button}>2</button>
  <button className={style.button}>+</button> */}
    </div>
);
}

export default ButtonContainer;