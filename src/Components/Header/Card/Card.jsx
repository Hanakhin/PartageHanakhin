import React, { useState } from "react";
import css from './Card.css'
import spider from '../Card/spider.jpg';
import justice from '../Card/justice.jpg';
import guardian from '../Card/guardian.jpg';

export function DisplayCards() {

    let [image, setImage] = useState(justice);

    return (
        <div className="Card">

            <img src={image} />
            <div className="boutton">
                <button onClick={() => (setImage(image = spider))}>Spider-Man</button>
                <button onClick={() => (setImage(image = justice))}>Justice League</button>
                <button onClick={() => (setImage(image = guardian))}>Les guardiens de la galaxie</button>
            </div>
        </div>
    )




}
