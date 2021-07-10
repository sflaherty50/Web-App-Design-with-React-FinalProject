import React from 'react'
import { HeadingHome } from './HeadingHome';
import { UserList } from './UserList';
import coolkid from './../images/thumbsup.jpg';

export const Home = () => {
    return (
        <div>
        <p>Please Enter the player's info into the database below.  We are keeping track of each team to make sure that the rosters are fair and the games are competitive.</p>
       <HeadingHome />
       <UserList />


       <h3><img src={coolkid} alt="Soccer"/> </h3>

       </div>

    )
}