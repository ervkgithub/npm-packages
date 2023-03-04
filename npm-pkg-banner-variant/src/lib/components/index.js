import React from 'react';
import './Banner.css';

export const Banner = (props) => {
    return (
        <div className={`banner--${props.kind} Banner`}
            onClick={props.handleClick}>
            {props.label}
        </div>
    );
}

