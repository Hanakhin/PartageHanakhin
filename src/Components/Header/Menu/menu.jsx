import React, { useState, Fragment } from "react";
import twitter from "../icons/twitter.svg";
import fb from "../icons/fb.svg";
import instagram from "../icons/insta.svg"
import achat from "../icons/acheter.svg"
import vente from "../icons/vendre.svg"
import explorer from "../icons/explorer.svg"
import decouvrir from "../icons/decouvrir.svg"
import innover from "../icons/innover.svg"
import croix from "../icons/croix.svg"
import css from './menu.css'



function Menu(props) {
    return (<Fragment>

        <section className="Section1">
            <div className="textS1">
                <h1 className="title">Shiyaku</h1>
                <h3 className="text"> The future of Nfts</h3>
            </div>
            <nav className="socials">
                <ul>
                    <span ><img src={twitter} width="20%" />  <a href="https://twitter.com/" target='_blank'>Twitter</a></span>
                    <span ><img src={fb} width="20%" />  <a href="https://twitter.com/" target='_blank'>Facebook</a></span>
                    <span ><img src={instagram} width="20%" />  <a href="https://twitter.com/" target='_blank'>Instagram</a></span>

                </ul>
            </nav>
        </section>


        <section className="Pre_Content">
            <span><span className="Text_card"><img src={achat} alt="" width="30px" /> <h1>Buy</h1></span> <div id="card1"></div> </span>
            <span><span className="Text_card"><img src={vente} alt="" width="30px" /> <h1>Sell</h1></span> <div id="card2"></div></span>
            <span><span className="Text_card"><img src={decouvrir} alt="" width="30px" /> <h1>Discover</h1></span> <div id="card3"></div></span>
            <span><span className="Text_card"><img src={explorer} alt="" width="30px" /> <h1>Explore</h1></span> <div id="card4"></div></span>
            <span><span className="Text_card"><img src={innover} alt="" width="30px" /> <h1>Innovate</h1></span> <div id="card5"></div></span>
        </section>
    </Fragment>
    )
}




export default Menu;