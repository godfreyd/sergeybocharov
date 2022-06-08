import React from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';
import { Button } from '@lookingschools/ui/Button/desktop/bundle'
import './index.css';

export const cnHomePage = cn('HomePage');

export const HomePage = (props) => {
    const { className } = props;
    return (
        <div className={cnHomePage(null, [className])}>
            <Header/>
            <Main>
                Main Page
                <Button theme="default" size="m">
                    Button
                </Button>
            </Main>
            <Footer/>
        </div>
    )
}