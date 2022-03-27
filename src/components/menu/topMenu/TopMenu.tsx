import React from 'react';
import './TopMenu.scss'
import user from './assets/p04.jpg'
import { Logo, Calendar, Notification } from  './assets'

const TopMenu = () => {
    return (
        <div className={'menu'}>
            <div className={'menu-container'}>
                <Logo className={'menu-logo'}/>
                <div className={'menu-nav'}>
                    <input type={'text'} placeholder={'Поиск'}/>
                    <Calendar className={'menu-icon'} />
                    <Notification className={'menu-icon'}/>
                    <div className={'menu-user'}>
                        <img src={user} alt={'user-icon'}/>
                        <p>Александр Ермин</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;