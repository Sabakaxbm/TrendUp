import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route, Link,
} from "react-router-dom";
import "./App.scss"
// import SideMenu from "./components/menu/sideMenu/SideMenu";
// import NewsList from "./components/news/newsList";
// import HotNews from "./components/news/hotNews/hotNews";
// import TopMenu from "./components/menu/topMenu/TopMenu";
import AppNews from "./components/appNews";
import NewsPage from "./components/news/newsPage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/news'} element={<AppNews/>}/>
                <Route path={'/news/:id'} element={<NewsPage/>}/>
                <Route path={'/'} element={<div>Hello!</div>}/>
            </Routes>
            <Link to="/news">Invoices</Link>
            <Link to="/">Expenses</Link>
        </BrowserRouter>
    );
}

export default App;
