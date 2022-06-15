import React from 'react';
import { cn } from '@bem-react/classname';
import { Main } from '../../components/Main';
import { Image } from '@lookingschools/ui/Image/desktop/bundle';
import { MainLayout } from '../../layouts/MainLayout';
import './index.css';

export const cnHomePage = cn('HomePage');

export const HomePage = (props) => {
    const { className } = props;
    return (<MainLayout>
            <div className={cnHomePage(null, [className])}>
                <Main>
                    <Image
                        className={cnHomePage('UserAvatar')}
                        src='user.jpg'
                        alt={`Фото пользователя`}
                        width={210}
                        height={210}

                    />
                    Main Page
                </Main>
            </div>
        </MainLayout>
    )
}