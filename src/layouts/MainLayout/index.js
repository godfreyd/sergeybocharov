import React from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Cookie } from '@lookingschools/ui/Cookie/desktop/bundle';
import './index.css';

const cnMainLayout = cn('MainLayout');

export const MainLayout = ({children, className}) => {
    return (
    <div className={cnMainLayout(null, [className])}>
        <Header className={cnMainLayout('Header')}/>
        <div className={cnMainLayout('Content')}>
            {children}
        </div>
        <Footer className={cnMainLayout('Footer')}/>
        <Cookie
            text={"We save cookies. It helps us provide you with the best experience we can."}
            linkVisible={false}
            button="It's OK"
        />
    </div>
    );
};
  