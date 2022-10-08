import { Button, Card } from 'antd';
import React from 'react';
import './human.css'

export interface HumanProps{
    img: string,
    username: string,
    jobTitle: string
 }
  
  const Human: React.FC<HumanProps> =  (props) => {
      return(
            <div className='humanCard'>
            <div className='title'>
                <div className='img'><img alt="" src={props.img} /></div>
                <div className='titleHuman'>
                    <div className='username'>{props.username}</div>
                    <div className='jobTitle'>{props.jobTitle}</div>
                </div>
            </div>
            
            <div className='button'>
                <Button type="primary" >
                    Добавить
                </Button>
            </div>
            </div>
      );
  };
  
  export default Human;