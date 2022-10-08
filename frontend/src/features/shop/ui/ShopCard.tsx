import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import Icon from '@ant-design/icons';
import { Button, Card } from 'antd';
import CoinsIcon from '../../../assets/icons/black_coins.svg';
import { useAppDispatch } from '../../../app/store';
import shopSlice, { ShopItem } from '../redux/shopSlice';


interface CardProps {
  item: ShopItem
}

const CardShop: React.FC<CardProps> = ({ item }) => {

  const { imgPath, description, price, title, id } = item;

  const dispatch = useAppDispatch();

  const addToCart = () => dispatch(shopSlice.actions.addToCart(item));
  return (
    <>
      <Card style={{ width: 285 }}>
        <img alt="example" src={imgPath} />
        <p className='card__title'>{title}</p>
        <p>{description}</p>
        <div className='footer'>
          <p className='footer__price'>
            {price}
            <Icon style={{ fontSize: 32, color: '#050D23' }} component={() => <img src={CoinsIcon} />} />
          </p>
          <Button type="primary" onClick={addToCart}>
            Купить
          </Button>
        </div>
      </Card>
    </>
  );
};

export default CardShop;