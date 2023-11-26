import React from 'react';

interface ButtonProps {
    onClick: () => void;
    text: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
    return (
        <button className={`border-2 border-accent bg-secondary rounded-lg p-2 w-48 ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
