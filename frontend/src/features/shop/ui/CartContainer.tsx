import React from 'react';
import CartProductCard, { Product } from './CartProductCard';



const CartContainer: React.FC<{products: Array<Product>}> = ({products}) => {
    return (
        <div className='cart__container cart__wrapper' style={{height: '100%', width: '100%'}}>
            {products.map((product, index) => <CartProductCard key={index} {...product}/>)}
        </div>
    )

}

export default CartContainer