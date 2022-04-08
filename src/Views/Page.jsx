import React from "react";
import Header from "../Components/Header/Header.jsx";
import Body from "../Components/Body/Body.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Css from './Page.css';


class Page extends React.Component {

    render() {
        return (
        <div className="Page">
            <section>
                    <Header />
                    <Body />
                    <Footer />
            </section>
        </div>
        )
    }
}


export default Page;