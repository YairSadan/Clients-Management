import React from 'react';

interface TitleProps {
    text: string;
    className?: string; // Added className prop
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
    return <h1 className={`text-tertiary font-extrabold text-3xl text-center ${className}`}>{text}</h1>; // Added className to the h1 element
};

export default Title;

