import {BrowserRouter, Route, Switch} from 'react-router-dom';

import React,{Suspense} from 'react';

import HomePage from './Component/HomePage';
import AboutMePage from './Component/AboutMePage';
import ExperiencePage from './Component/ExperiencePage';
import PortfolioPage from './Component/PortfolioPage ';
import ContactPage from './Component/ContactPage';
import WebappPage from './Component/WebappPage';
import Standee1Page from './Component/Standee1Page';
import Standee2Page from './Component/Standee2Page';

const Router = ()=> (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/ve-toi" component={AboutMePage}/>
        <Route path="/kinh-nghiem" component={ExperiencePage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/lien-he" component={ContactPage}/>
        <Route path="/San-pham" component={WebappPage}/>
        <Route path="/standee1" component={Standee1Page}/>
        <Route path="/standee2" component={Standee2Page}/>
    </Switch>
    </Suspense>
    </BrowserRouter>
);

export default Router;