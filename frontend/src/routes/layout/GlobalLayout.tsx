import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './styles.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import PersonIcon from '../../assets/icons/person.svg';
import CoinIcon from '../../assets/icons/coins.svg';
import { useAppSelector } from '../../app/store';
import routesTitleConfig from '../routesTitleConfig';
import {ShoppingCartOutlined  } from "@ant-design/icons";


const GlobalLayout: React.FC = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const { coinsAmount } = useAppSelector(state => state.wallet.wallet)

    const location = useLocation();


    const isMarketplace = () => {
        return location.pathname.slice(1) == 'home/market';
    }

    const buildTitleByLocation = () => {
       return routesTitleConfig.get(location.pathname.slice(1));
    }

    return (
        <div className='layout'>
            <header className='header'>
                <div className='flex-group'>
                    <ArrowLeftOutlined
                        style={{ fontSize: 32, color: '#FAFAFA' }}
                        onClick={goBack} />
                    <div className='header__title'>
                        {buildTitleByLocation()}
                    </div>
                </div>
                <div className='flex-group action-group'>
                    <div className='balance'>
                        <div className='balance__coins'>{coinsAmount}</div>
                        <Icon component={() => <img src={CoinIcon} />} />
                    </div>
                    {isMarketplace() 
                        ?  <ShoppingCartOutlined style={{color: '#FAFAFA', fontSize: 32}} onClick={() => console.log('shop')} />
                        : null
                    }
                    <Icon
                        onClick={() => console.log('Редирект')}
                        component={() => <img src={PersonIcon} />} />
                </div>
            </header>
            <section color='black' className='content'>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default GlobalLayout;