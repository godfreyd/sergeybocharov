import React from 'react';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';
import './index.css';

export const cnHeader = cn('Header');

export const Header = (props) => {
    const { className } = props;
    return (
        <header className={cnHeader(null, [className])}>
            <nav className={cnHeader('Nav')}>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                </ul>
           </nav>
        </header>
    )
}