import React from 'react';
import Journey from './Journey';
import Bkg from '../GeneralisedImage/background.png';

export default function Home(){

    return(
        <div>
            
            <img className="bg-image pt-5" alt='...' src={Bkg} style={{height:'auto',width:'100%'}}></img>
            
            <Journey />
            
        </div>
    )
}