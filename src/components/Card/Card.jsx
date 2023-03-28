import React from "react";
import "./Card.css";
const Card = ({cart}) => {
    // const {cart} = props.cart
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice*7/100;
    const total = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price: ${totalPrice} </p>
      <p>Shipping: ${totalShipping} </p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h6>Grand Total: {total.toFixed(2)} </h6>

    </div>
  );
};

export default Card;
