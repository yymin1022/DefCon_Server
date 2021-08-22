import React from "react";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

import "./Default.css"

const Default = (props) => {
    const {
        className,
        children,
    } = props;
    
    return (
        <div id="Container" className={className}>
            <Header/>
            <Section>
                {children}
            </Section>
            <Footer/>
        </div>
    );
}

Default.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Default;