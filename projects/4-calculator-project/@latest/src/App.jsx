import style from  './App.module.css'
import Display from './components/Display'

function App() {


  return (
    <div className={style.calculator} >
    <Display></Display>
      <div className={style.buttonsContainer}>
    <button className={style.button}>c</button>
    <button className={style.button}>1</button>
    <button className={style.button}>2</button>
    <button className={style.button}>+</button>
      </div>
    </div>
  )
}

export default App
