import { Button, Card } from 'antd';
import React from 'react';
import './basketCard.css';
import Img from './cross.png'
import ImgMinus from './minus.png'
import ImgPlus from './plus.png'

export interface HumanProps{
    img: string,
    nameOfProduct: string,
    description: string,
    price: number
 }
  
  const basketCard: React.FC<HumanProps> =  (props) => {
      return(
            <div className='basketCard'>
            <div className='title'>
                <div className='productImg'><img alt="" src={props.img} /></div>
                <div className='titleBasketCard'>
                    <div className='nameOfProduct'>{props.nameOfProduct}</div>
                    <div className='description'>{props.description}</div>
                </div>
            </div>
            <div className='buttons'>
                <button className='plus'>
                    <img alt="" src={ImgMinus} />
                </button>
                <button className='minus'>
                    <img alt="" src={ImgPlus} />
                </button>
            </div>
            <div className='price'>
                <p>{props.price}</p>
            </div>
            <div className='cross'>
                <button>
                    <img alt="" src={Img} />
                </button>
            </div>
            </div>
      );
  };
  
  export default basketCard;