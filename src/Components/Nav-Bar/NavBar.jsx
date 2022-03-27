import React, { useState } from "react";
import Css from "./navbar.css";
import { CSSTransition } from 'react-transition-group';

function Nav(props) {
    return (

        <nav className="navbar" >

            <ul className="navbar-nav"> {props.children}</ul>

        </nav>
    );
}

export function Navitem(props) {

    const [open, setOpen] = useState(false);

    return (


        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon} </a>

            {open && props.children}
        </li>

    );
}

export function DropDownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            </a>

        )
    }



    return (

        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >

                <div className="menu">
                    <DropDownItem>My profile</DropDownItem>

                    <DropDownItem
                        goToMenu='settings'>
                        settings
                    </DropDownItem>

                </div>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >

                <div className='menu'>
                    <DropDownItem
                        goToMenu='main'>
                        Return</DropDownItem>

                    <DropDownItem>My profile</DropDownItem>
                    <DropDownItem>Contact</DropDownItem>
                    <DropDownItem>Contact</DropDownItem>
                    <DropDownItem>Help</DropDownItem>
                    <DropDownItem>Library</DropDownItem>
                    <DropDownItem>Settings</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    )

}


export default Nav;