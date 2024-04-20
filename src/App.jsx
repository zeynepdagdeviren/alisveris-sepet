import { useState } from "react"
import Cart from "./component/Cart"
import Header from "./component/Header"

import Products from "./component/Products"



function App() {
 

const [cart, setCart] = useState([])

const emptyCart = () => {
  setCart([])
}

  return (
    <div className="container mx-auto p-4">

      <Header cart={cart} />
      <Products cart={cart} setCart={setCart}/>
     <Cart  cart={cart} emptyCart={emptyCart}/> 
      
    </div>
  )
}

export default App
