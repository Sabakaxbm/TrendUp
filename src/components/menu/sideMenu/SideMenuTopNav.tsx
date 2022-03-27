import React from 'react';
import SideMenuLink from "./SideMenu-link";
import {Analitic, Apple, Bookmark, Files, Tv} from "./assets";

const SideMenuTopNav = () => {
    return (
        <>
            <div className={'sideMenu-item'}>
                <SideMenuLink SomeComponent={Apple} text={'Курсы'}/>
            </div>
            <div className={'sideMenu-item'}>
                <SideMenuLink SomeComponent={Analitic} text={'Аналитика'}/>
            </div>
            <div className={'sideMenu-item'}>
                <SideMenuLink SomeComponent={Tv} text={'Вебинары'}/>
            </div>
            <div className={'sideMenu-item'}>
                <SideMenuLink SomeComponent={Files} text={'Файлы и материалы'}/>
            </div>
            <div className={'sideMenu-item'}>
                <SideMenuLink SomeComponent={Bookmark} text={'Мои закладки'}/>
            </div>
        </>
    );
};

export default SideMenuTopNav;