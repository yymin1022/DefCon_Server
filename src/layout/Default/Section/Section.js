import React from "react";
import PropTypes from "prop-types";

import "./Section.css";

const Section = props => {
    const {
        className,
        children,
    } = props;
    
    return (
        <div id="SectionContainer" className={ className }>
            <div id="SectionWrapper">
                {children}
            </div>
        </div>
    );
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Section;
