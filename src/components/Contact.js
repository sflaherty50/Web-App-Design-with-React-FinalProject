import React from 'react'
import { Heading } from './Heading';
import kidsagain from './../images/kidsplayingsocceragain.jpg';

export const Contact = () => {
    return (
        <div className="container">
            <Heading />
       <p>Email us at: <a href="mailto:fakesocceremail@NYSL.org">soccer@NYSL.org</a></p>
       <h3><img src={kidsagain} alt="Soccer"/> </h3>
       </div>

    )
}
