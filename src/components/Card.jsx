import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <div className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
