import React, { useState } from "react";
import css from './Card.css'
import spider from '../Card/img/spider.jpg';
import justice from '../Card/img/justice.jpg';
import guardian from '../Card/img/guardian.jpg';
import iconbackward from '../Card/img/iconbackward.png';
import iconforward from '../Card/img/iconforward.png';

export function DisplayCards(props) {

    const image = [guardian,justice,spider];
    const [index, setIndex] = useState(0);


    return (
        <div className="Card">

            <img src={image[index]} />
            <div className="boutton">
                <img className="icons" src={iconbackward} onClick={() => setIndex(Math.max(index-1,0))}></img> 
                <img className="icons" src={iconforward} onClick={() => setIndex(Math.min(index+1,image.length-1))}></img>
            </div>
        </div>
    )




}
