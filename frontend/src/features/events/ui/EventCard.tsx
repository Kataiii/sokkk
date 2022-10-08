import React from 'react';
import './style.css';
import FakeImage from '../../../assets/images/fake_image.jpg';

export interface EventCardProp {
    title: string,
    description: string
}

const EventCard:React.FC<EventCardProp> = ({title, description}) => {
    return (
        <div className='event-card__wrapper'>
            <img src={FakeImage}/>
            <div className='event-card__content'>

            </div>
        </div>
    )
}