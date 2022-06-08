import React from 'react';
import { cn } from '@bem-react/classname';
import { Header } from '../../components/Header';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';
import './index.css';

export const cnProjectsPage = cn('ProjectsPage');

export const ProjectsPage = (props) => {
    const {className} = props;
    return (
        <div className={cnProjectsPage(null, [className])}>
            <Header/>
            <Main>Project Page</Main>
            <Footer/>
        </div>
    )
}