import React, {FC} from 'react';
import {Bookmark, ChatIcon, LinkIcon, VisibilityIcon} from "./assets";

interface CardFooterProps {
    comments: number,
    views: number,
}

const CardFooter: FC<CardFooterProps> = ({comments, views}) => {
    return (
        <div className={'card-footer'}>
            <div className={'card-footer-content'}>
                <div className={'card-footer__icon'}>
                    <ChatIcon/>
                </div>
                <div className={'card-footer-content__comments'}>{comments} комментариев</div>
                <div className={'card-footer__icon'}>
                    <Bookmark/>
                </div>
                <div className={'card-footer__icon'}>
                    <LinkIcon/>
                </div>
            </div>
            <div className={'card-footer-content'}>
                <div className={'card-footer__icon'}>
                    <VisibilityIcon/>
                </div>
                <div className={'card-footer-content__visible'}>
                    {views} просмотра
                </div>
            </div>
        </div>
    );
};

export default CardFooter;