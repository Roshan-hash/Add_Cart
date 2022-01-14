import React from 'react';
import './Cart.css';

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClear}) => {
    const TotalPrice = cartItems.reduce((price, items) => price + items.quantity * items.price, 0);
    const totalprice = 40 + TotalPrice;
    const cartitem = cartItems.length;
    return (
        <div className='Introcontainer' >
           <div className='noitmes'>
              {cartItems.lenght === 0 && (<div className='cart-items-empty'> No Items Are Added. </div>)}
           </div>
            <div className='IntroLeft'>
           
                   <div className='cart-container'>
                      <div className='clear-cart'>
                        {cartitem >=1 && (<button className='clear-button' onClick={handleCartClear}>X</button>)}
                      </div>
                   <div className='cart-containertitle'>
                       My Cart 
                    </div>
                   <div>
                   {cartItems.map((items) => (
                   <div key={items.id} className='cart-itemscontainer'>
                       <div className='cart-product-image'>
                           <img className='cart-image' src={items.image} alt={items.title}/>
                       </div>
                       <div className='cart-items-title'>
                           {items.title}
                           <div className='cart-items-price'>
                           ₹ {items.price}
                           </div>
                       </div>
                       
                       <div className='cart-button'>
                           <button className='Addproduct' onClick={() => handleAddProduct(items)}> + </button>
                           <div className='productquatity'>
                               {items.quantity}
                           </div>
                           <button className='Subproduct' onClick={() => handleRemoveProduct(items)}> - </button>
                       </div>
                   </div>
                    ))}
                    </div>
                        <div className='placeorder'>
                           <button className='place'>PLACE ORDER</button>
                       </div>
               </div>
              
            </div>
            <div className='Introright'>
                <div className='Image'>
                    <div className='cart-pricebill'>
                        <div className='PriceDet'>
                            Price Details
                        </div>
                        <div className='Pricebill'>
                            <div className='Price'>
                                <div className='Pricetitle'>Price</div>
                                <span className='Pricenum'>₹ {TotalPrice}</span>
                            </div>
                            <div className='Price'>
                                <div className='Pricetitle'>Delivery Charge</div>
                                <span className='Pricenum'>₹40</span>
                            </div>
                            <div className='TotalAmount'>
                                <div className='totaltitle'>Total Amount</div>
                                <div className='totalnum'>₹ {totalprice}</div>
                            </div>
                            <div className='desc'>
                                You will save your money 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cart