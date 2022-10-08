import { Button, Card } from 'antd';
import React from 'react';
import './style.css';
import Minus from '../../../assets/icons/minus.svg';
import Plus from '../../../assets/icons/plus.svg';
import Close from '../../../assets/icons/close.svg';
import { useAppDispatch } from '../../../app/store';
import Icon from '@ant-design/icons';
import Coins from '../../../assets/icons/coins.svg';
import shopSlice, { ShopItem } from '../redux/shopSlice';

export interface Product {
    id: number,
    img: string,
    title: string,
    description: string,
    count: number,
    price: number
}


const CartProductCard: React.FC<Product> = ({ img, title, description, count, price, id }) => {


    const item: ShopItem = {
        id: id,
        imgPath: img,
        title: title,
        description: description,
        price: price
    }

    const dispatch = useAppDispatch();

    const increment = () => dispatch(shopSlice.actions.addToCart(item));
    const decrement = () => dispatch(shopSlice.actions.increaseCount(item));
    const deleteItem = () => dispatch(shopSlice.actions.deleteFromCart(item));

    return (
        <div className='basketCard'>
            <div className='title'>
                <div className='productImg'><img alt="" src={img} /></div>
                <div className='titleBasketCard'>
                    <div className='nameOfProduct'>{title}</div>
                    <div className='description'>{description}</div>
                </div>
            </div>
            <div className='buttons'>
                <button onClick={decrement} className='plus'>
                    <img alt="" src={Minus} />
                </button>
                <div>{count}</div>
                <button className='minus' onClick={increment}>
                    <img alt="" src={Plus} />
                </button>
            </div>
            <div className='buttons__price'>
                <p>{price}</p>
            </div>
            <div className='cross'>
                <button onClick={deleteItem}>
                    <img alt="" src={Close} />
                </button>
            </div>
        </div>
    );
};

export default CartProductCard;