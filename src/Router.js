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
import Standee3Page from './Component/Standee3Page';
import Standee4Page from './Component/Standee4Page';
import Standee5Page from './Component/Standee5Page';
import Standee6Page from './Component/Standee6Page';
import Standee7Page from './Component/Standee7Page';
import Standee8Page from './Component/Standee8Page';

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
        <Route path="/standee3" component={Standee3Page}/>
        <Route path="/standee4" component={Standee4Page}/>
        <Route path="/standee5" component={Standee5Page}/>
        <Route path="/standee6" component={Standee6Page}/>
        <Route path="/standee7" component={Standee7Page}/>
        <Route path="/standee8" component={Standee8Page}/>
    </Switch>
    </Suspense>
    </BrowserRouter>
);

export default Router;