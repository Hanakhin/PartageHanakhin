import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Footer from "../Components/Footer";
import Css from './Page.css';


class Page extends React.Component {

    render() {
        return (
        <section className="Page">
                    <Header />
                    <Body />
                    <Footer />
        </section>
        )
    }
}


export default Page;