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
            {children}
        </div>
    );
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export default Section;
