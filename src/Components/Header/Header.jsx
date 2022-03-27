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




            </section>
        )
    }
}


export default Header;