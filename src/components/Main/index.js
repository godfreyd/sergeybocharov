import React from 'react';
import { cn } from '@bem-react/classname';
import './index.css';

export const cnMain = cn('Main');

export const Main = (props) => {
    const { children, className } = props;
    return (
        <main className={cnMain(null, [className])}>
            <section className={cnMain('Container')}>
             {children}
            </section>
           
        </main>
    )
}