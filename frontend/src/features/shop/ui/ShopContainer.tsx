import React from 'react';
import Card from './ShopCard';
import './style.css';
import { FetchingStatus } from '../../../common/utility_types/FetchingStatus';
import { ShopItem } from '../redux/shopSlice';
import image from '../../../assets/images/people.png';

interface ShopContainerProps {
    fetchingStatus: FetchingStatus,
    items: Array<ShopItem>
}

const ShopContainer: React.FC<ShopContainerProps> = ({ fetchingStatus, items }) => {
    return (
        <>
            <div className='container__background'></div>
            <div className='container'>
                <div className='container_cards'>
                    {fetchingStatus == FetchingStatus.LOADING
                        ? <div>Loading...</div>
                        : items.map(item => <Card item={item} />)
                    }

                    {/* <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} />
                    <Card img={image} title='Название товара' description='Описание товара' price={100} /> */}
                </div>
            </div>
        </>
    );
};

export default ShopContainer;