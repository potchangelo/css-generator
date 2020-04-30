import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { NavContext } from '../Nav';

function renderWithNavContext(
    ui, { 
        isNavOpenMobile = false, 
        dispatch = () => { } 
    } = {}) {
    const Wrapper = ({ children }) => {
        <NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
            {children}
        </NavContext.Provider>
    };
    return { ...render(ui, { wrapper: Wrapper }) };
}

function renderWithRouter(
    ui, {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}) {
    const Wrapper = ({ children }) => (
        <Router history={history}>{children}</Router>
    );
    return { ...render(ui, { wrapper: Wrapper }), history };
}

function renderWithRouterAndNavContext(
    ui, { 
        isNavOpenMobile = false, 
        dispatch = () => {},
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}) {
    const Wrapper = ({ children }) => (
        <Router history={history}>
            <NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
                {children}
            </NavContext.Provider>
        </Router>
    );
    return { ...render(ui, { wrapper: Wrapper }), history };
}

export { renderWithNavContext, renderWithRouter, renderWithRouterAndNavContext };