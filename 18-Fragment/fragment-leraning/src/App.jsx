import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
function App() {

// var a = []
var a = ["daal","makhni","chini","roti","sanu"]
// var b  =  : null
  return (
    <>
    <Container>
     <div>this is our list group</div>
  <ErrorMessage items={a}></ErrorMessage>  
  <FoodInput></FoodInput>
  <FoodItems items={a}></FoodItems>
  
    </Container>
    {/* <Container>
    <p>this is our healthy food</p>
    </Container> */}
    </>
  )
}

export default App
