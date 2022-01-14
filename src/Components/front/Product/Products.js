import React from 'react';
import './Products.css';

const Products = ({productItems, handleAddProduct}) => {
    console.log(productItems);
    return (
        
        <div className='products'>
            <div className='title'>
                <h1>All <span className='titleproducts'>Products</span></h1>
            </div>
            <div className='products-wrapper'>
            {
                productItems.map(productItem => (
                    <div className='product-card'>
                        <div className='product-image-container'>
                        <img className='product-image' src={productItem.image} alt='product-name' ></img>
                        </div>
                        <div className='product-title'>
                            {productItem.title}
                        </div>
                        <div className='product-price'>
                        ₹ {productItem.price}
                        </div>
                        <div className='addbutton'>
                          <button className={productItem.Stock >= 10 ? "addtocart" : "outofstock"} onClick={() => handleAddProduct(productItem)}>{productItem.Stock >= 10 ? "Add To Cart" : "Out Of Stock"}</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Products
