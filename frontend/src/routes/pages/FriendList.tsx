import React from 'react';
import FriendsContainer from '../../features/friends/ui/FriendsContainer'
import { HumanProps } from '../../features/friends/ui/Human';
const FriendsList: React.FC = () => {

    const friends: Array<HumanProps> = [
        {img:'', username:'',jobTitle:''}
    ]

    return (
        <div>
            <FriendsContainer listHumans={[]} />    
        </div>
    )
}

export default FriendsList;