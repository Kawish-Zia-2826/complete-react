import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
function App() {

// var a = []
var a = ["daal","makhni","chini","roti","sanu"]
// var b  =  : null
  return (
    <>
     <div>this is our list group</div>
  <ErrorMessage items={a}></ErrorMessage>  
  <FoodItems items={a}></FoodItems>
  
    </>
  )
}

export default App
