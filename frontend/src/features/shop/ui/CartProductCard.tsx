import { Button, Card } from 'antd';
import React from 'react';
import './style.css';
import Minus from '../../../assets/icons/minus.png';
import Plus from '../../../assets/icons/plus.png';
import Close from '../../../assets/icons/cross.png';

export interface Product{
    img: string,
    title: string,
    description: string,
    count: number,
    price: number
}

  
  const CartProductCard: React.FC<Product> =  ({img, title, description, count, price}) => {


      return(
            <div className='basketCard'>
            <div className='title'>
                <div className='productImg'><img alt="" src={img} /></div>
                <div className='titleBasketCard'>
                    <div className='nameOfProduct'>{title}</div>
                    <div className='description'>{description}</div>
                </div>
            </div>
            <div className='buttons'>
                <button className='plus'>
                    <img alt="" src={Minus} />
                </button>
                <button className='minus'>
                    <img alt="" src={Plus} />
                </button>
            </div>
            <div className='price'>
                <p>{price}</p>
            </div>
            <div className='cross'>
                <button>
                    <img alt="" src={Close} />
                </button>
            </div>
            </div>
      );
  };
  
  export default CartProductCard;