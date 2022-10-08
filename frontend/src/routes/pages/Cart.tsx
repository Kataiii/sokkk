import { Button } from 'antd';
import React from 'react';
import { useAppSelector } from '../../app/store';
import CartContainer from '../../features/shop/ui/CartContainer';
import BasketCard, { Product } from '../../features/shop/ui/CartProductCard';
import '../../features/shop/ui/style.css'

const Cart: React.FC = () => {

    const { cart, items } = useAppSelector((state) => state.shop)

    const products: Array<Product> = cart.map(cartProduct => {
        const item = items.find((item) => item.id == cartProduct.productId)!;
        return {
            id: item.id,
            img: item.imgPath,
            title: item.title,
            price: item.price,
            description: item.description,
            count: cartProduct.count
        }
    });

    const resultMoney = products.length > 0
        ? products
            .map((product) => product.count * product.price)
            .reduce((prev, next) => prev + next)
        : 0;

    const order = () => {
        console.log('order');
    }

    return (
        <div>
            <div className='container__background'>
                <div className='cart__col'>
                    <CartContainer products={products} />
                    <div className='cart__wrapper cart__result-panel'>
                        <div className='cart__flex-group'>
                            <p>Итого: </p>
                            <div>{resultMoney}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <Button type="primary" onClick={order}>
                                Купить
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;