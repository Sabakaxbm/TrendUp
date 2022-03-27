import React, {FC} from 'react';
import {RectangleTradingIcon} from "./assets";

interface CardInfoProps {
    type: string,
    date: string
}

const CardInfo: FC<CardInfoProps> = ({ type, date }) => {
    return (
        <div className={'card-info'}>
            <div className={'card-info-type'}>
                <div className={'card-info-type__icon'}>
                    <RectangleTradingIcon/>
                </div>
                <div className={'card-info-type__text'}>
                    #{type}
                </div>
            </div>
            <div className={'card-info__date'}>
                {date}
            </div>
        </div>
    );
};

export default CardInfo;