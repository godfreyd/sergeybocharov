import React from 'react';
import { cn } from '@bem-react/classname';
import { CustomLink  } from '../CustomLink';
import './index.css';

export const cnHeader = cn('Header');

export const Header = (props) => {
    const { className } = props;
    return (
        <header className={cnHeader(null, [className])}>
            <div className={cnHeader('Logo')}></div>
            <nav className={cnHeader('Nav')}>
                <ul className={cnHeader('List')}>
                    <li className={cnHeader('ListItem')}>
                        <CustomLink to="/">About me</CustomLink>
                    </li>
                    <li className={cnHeader('ListItem')}>
                        <CustomLink to="/projects">Projects</CustomLink>
                    </li>
                </ul>
           </nav>
           <div className={cnHeader('Links')}></div>
        </header>
    )
}