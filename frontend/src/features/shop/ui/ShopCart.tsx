import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  useAppSelector } from '../../../app/store';


const ShopCart: React.FC = () => {

   const navigate = useNavigate();
    const cart = useAppSelector(state => state.shop.cart);

    const quatityAll = cart.length == 0
        ? 0
        : cart.map(item => item.count)
            .reduce((prev, next) => prev + next);
    

    return (
        <Badge color='blue' size='default' count={quatityAll}>
            <ShoppingCartOutlined style={{ color: '#FAFAFA', fontSize: 32 }} onClick={() => navigate('/home/cart')} />
        </Badge>

    )
}

export default ShopCart;