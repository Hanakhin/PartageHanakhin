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
                        <h3 className="text"> Get your collection now</h3>
                        </div>
                </section>





            </section>
        )
    }
}


export default Header;