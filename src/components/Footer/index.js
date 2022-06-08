import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';

export const cnFooter = cn('Footer');

export const Footer = (props) => {
    const { className } = props;
    return (
        <footer
            className={cnFooter(null, [className])}
        >
            Footer
        </footer>
    )
}