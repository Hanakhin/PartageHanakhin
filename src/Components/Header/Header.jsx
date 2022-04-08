import React from "react";
import Css from './Header.css';
import Nav, { Navitem, DropDownMenu } from "./Nav-Bar/NavBar";
import Menu from "./Menu/menu";

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <section>
                    <Nav>


                        <Navitem icon="❌" >
                            <DropDownMenu />

                        </Navitem>

                    </Nav>

                    <Menu />



                </section>
            </div>
        )
    }
}


export default Header;