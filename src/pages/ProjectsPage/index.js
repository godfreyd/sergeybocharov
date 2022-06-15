import React from 'react';
import { cn } from '@bem-react/classname';
import { Main } from '../../components/Main';
import { MainLayout } from '../../layouts/MainLayout';
import './index.css';

export const cnProjectsPage = cn('ProjectsPage');

export const ProjectsPage = (props) => {
    const {className} = props;
    return (<MainLayout>
            <div className={cnProjectsPage(null, [className])}>
                <Main>Project Page</Main>
            </div>
        </MainLayout>
    )
}