import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Button.css';

const Button = ({ children, variant = 'primary', icon = false, onClick, type = 'button', className = '', ...props }) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
            {icon && <ArrowRight size={18} />}
        </button>
    );
};

export default Button;
