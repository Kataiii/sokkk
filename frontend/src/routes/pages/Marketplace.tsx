import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { loadProduct } from '../../features/shop/redux/asyncActions';
import ShopContainer from '../../features/shop/ui/ShopContainer';

const Marketplace: React.FC = () => {


    const {items, itemsStatus} = useAppSelector(state => state.shop);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProduct())
        //Загрузка товаров
    }, [])

    return (
        <ShopContainer fetchingStatus= {itemsStatus} items ={items}/>
    )
}

export default Marketplace;