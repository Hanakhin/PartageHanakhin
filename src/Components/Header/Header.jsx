import React from "react";
import Css from './Header.css';
import Nav from "./Nav-Bar/NavBar";
import { Navitem } from "./Nav-Bar/NavBar";
import { DropDownMenu } from "./Nav-Bar/NavBar";

class Header extends React.Component {

    render() {
        return (
            <section className="Header">
                <Nav>


                    <Navitem icon="❌" >
                        <DropDownMenu />

                    </Navitem>

                </Nav>

                <section className="Section1">
                    <div className="textS1">
                        <h1 className="title">Shiyaku</h1>
                        <h3 className="text"> The future of Nfts</h3>
                    </div>
                    <nav className="socials">
                        <ul>
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                        </ul>
                    </nav>
                </section>
                <section className="Pre_Content">
                    <div id="card1">
                    </div>
                    <div id="card2"></div>
                    <div id="card3"></div>
                    <div id="card4"></div>
                    <div id="card5"></div>
                </section>




            </section>
        )
    }
}


export default Header;