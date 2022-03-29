import React, { useState } from "react";
import css from './Card.css'
import spider from '../Card/spider.jpg';
import justice from '../Card/justice.jpg';
import guardian from '../Card/guardian.jpg';

export function DisplayCards() {

   // let [image, setImage] = useState(justice);

    const image = [guardian,justice,spider];

    const [index, setIndex] = useState(0);

    return (
        <div className="Card">

            <img src={image[index]} />
            <div className="boutton">
                <button onClick={() => setIndex(Math.max(index-1,0))}>Image Précédente</button>
                <button onClick={() => setIndex(Math.min(index+1,image.length-1))}>Image Suivante</button>
                
            </div>
        </div>
    )




}
