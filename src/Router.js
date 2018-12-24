import {BrowserRouter, Route, Switch} from 'react-router-dom';

import React,{Suspense} from 'react';

import HomePage from './Component/HomePage';
import AboutMePage from './Component/AboutMePage';
import ExperiencePage from './Component/ExperiencePage';
import PortfolioPage from './Component/PortfolioPage ';
import ContactPage from './Component/ContactPage';

const Router = ()=> (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/ve-toi" component={AboutMePage}/>
        <Route path="/kinh-nghiem" component={ExperiencePage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/lien-he" component={ContactPage}/>
    </Switch>
    </Suspense>
    </BrowserRouter>
);

export default Router;