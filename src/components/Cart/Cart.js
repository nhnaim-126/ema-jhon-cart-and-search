import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h2>This is card container</h2>
            <p>Selected item : {cart.length}</p>
        </div>
    );
};

export default Cart;