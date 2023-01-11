import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {addToCart , product} = props
    const {img, name, price, ratings , seller} = product


    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratting : {ratings} 3star</p>
          </div>
          <button onClick={()=>addToCart(product)} className='cart-btn'>
                    <p> Add to cart</p>
                 <FontAwesomeIcon icon ={faShoppingCart} ></FontAwesomeIcon>   
          </button>
        </div>
    );
};

export default Product;