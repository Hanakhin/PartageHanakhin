import React from "react";
import Css from './Body.css';


class Body extends React.Component {

    render() {
        return (
            <section className="Body">

                <div className="Content">
                    <h1 className="title_content">What is Shiyaku ?</h1>

                </div>
                <div className="Content">
                    <h1 className="title_content">How to get yours ?</h1>
                </div>

                <div className="Content">
                    <h1 className="title_content">Join the future of NFTs</h1>
                </div>
            </section>
        )
    }
}


export default Body;