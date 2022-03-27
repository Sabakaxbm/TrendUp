import React from 'react';
import './SideMenu.scss'
import SideMenuTopNav from "./SideMenuTopNav";
import SideMenuBottomNav from "./SideMenuBottomNav";
import {useMediaQuery} from "react-responsive";


const SideMenu = () => {
    const isBigScreen = useMediaQuery({query: '(min-width: 1400px)'})

    return (
        (isBigScreen)
            ? <div>
                <div className={'sideMenu'}>
                    <div className={'sideMenu-container'}>
                        <SideMenuTopNav/>
                        <SideMenuBottomNav/>
                    </div>
                </div>
            </div>
            : null
    );
};

export default SideMenu;
