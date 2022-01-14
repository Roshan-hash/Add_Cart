import React, { useState }from 'react';
import data from './Components/back/Data/Data';
import Header from './Components/front/header/Header';
import { BrowserRouter} from 'react-router-dom';
import Routexx from './Components/front/Routes/Routexx';
import Intro from './Components/front/intro/Into';


const App = () => {

  const { productItems }  = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1}: item)
      );
    }else{
      setCartItems([...cartItems, { ...product, quantity: 1}]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(
        cartItems.map((item) => (
          item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item
        ))
      )
    }

  }

  const handleCartClear = () => {
    setCartItems([]);
  }

  return (
    <div>
      <BrowserRouter>
         <Header cartItems={cartItems}/>
         <Intro/>
         <Routexx productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
      </BrowserRouter>
    </div>
  )
}

export default App

