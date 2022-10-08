
import React from 'react';
import Human, { HumanProps } from './Human';

interface Props{
    listHumans: Array<HumanProps>;
}

const FriendsLeft : React.FC<Props> = (props) => {
    return (
        <div className='container'>
            {props.listHumans.map(function(item, i){
                return <Human {...item}/>
                    })
                }
        </div>
    );
};

export default FriendsLeft;