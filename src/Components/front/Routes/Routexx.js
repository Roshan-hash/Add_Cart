import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import Products from '../Product/Products'
import Signup from '../Signup/Signup'

const Routexx = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClear}) => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cart" element={<Cart  cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>}/>
            </Routes>
        </div>
    )
}

export default Routexx

