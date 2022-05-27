import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../navbar';
const customHistory = createBrowserHistory();

const AppRoutes = () => {
    return (
        <BrowserRouter history={customHistory}>
            <Home />
        </BrowserRouter>
    )
}

export default AppRoutes;
