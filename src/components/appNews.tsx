import React from 'react';
import SideMenu from "./menu/sideMenu/SideMenu";
import NewsList from "./news/newsList";
import HotNews from "./news/hotNews/hotNews";
import TopMenu from "./menu/topMenu/TopMenu";

const AppNews = () => {
    return (
        <>
            <TopMenu/>
            <div className={"app"}>
                <SideMenu/>
                <NewsList/>
                <HotNews/>
            </div>
        </>

    );
};

export default AppNews;