
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import "./Prodouct.css";

const Product = (props) => {
  const { name, img, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;
 

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button onClick={()=>handleAddToCart(props.product)} className="btn-card">
        Add to Card  <FontAwesomeIcon icon={faShoppingBag} />
      
      </button>
    </div>
  );
};

export default Product;
