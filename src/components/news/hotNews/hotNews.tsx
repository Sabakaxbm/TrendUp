import React, {FC} from 'react';
import './hotNews.scss'
import {LogoNews, NewBack} from "./assets";
import {useMediaQuery} from "react-responsive";


const HotNews: FC = () => {

    const isBigScreen = useMediaQuery({query: '(min-width: 1400px)'})

    return (
        (isBigScreen)
            ? <div>
                <div className={'hotNews-container'}>
                    <div className={'hotNews-content'}>
                        <div className={'hotNews__text'}>
                            Главные новости
                        </div>
                        <div className={'hotNews__logo'}>
                            <LogoNews width={'119px'} height={'35px'}/>
                        </div>
                    </div>
                    <NewBack width={'100px'} height={'100%'}/>
                </div>
            </div>
            : null

    );
};

export default HotNews;