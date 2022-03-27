import React, {FC} from 'react';
import './card.scss'
import CardInfo from "./cardInfo";
import CardFooter from "./cardFooter";

interface CardProps {
    posts: {
        id: number,
        type: string,
        date: string,
        title: string,
        text: string,
        comments: number,
        views: number,
    }[]
}

const Card: FC<CardProps> = ({posts}) => {
    return (
        <>
            {posts.map(item =>
                <div key={item.id} className={'card-container'}>
                    <CardInfo type={item.type} date={item.date}/>
                    <div className={'card-title'}>
                        {item.title}
                    </div>
                    <div className={'card-content'}>
                        {item.text}
                    </div>
                    <CardFooter comments={item.comments} views={item.views}/>
                    <div/>
                </div>
            )}
        </>
    );
};

export default Card;