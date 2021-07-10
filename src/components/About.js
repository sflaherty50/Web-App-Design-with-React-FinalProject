import React from 'react'
import { Heading } from './Heading';

import kids from './../images/kids.png';

export const About = () => {
    return (
        <div className="container">
            <Heading />
       <p>Welcome to Nashua Youth Soccer League where's today's youth is tomorrow star!</p>
       <h3><img src={kids} alt="Soccer"/> </h3>
       </div>

    ) 
}