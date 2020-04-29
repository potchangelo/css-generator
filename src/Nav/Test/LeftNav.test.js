import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { LeftNav } from '..';
import { NavContext } from '../../App';

test('LeftNav is hidden on mobile if isNavOpenMobile is false', () => {
    const { container } = render(
        <BrowserRouter>
            <NavContext.Provider value={{ isNavOpenMobile: false, dispatch: () => {} }}>
                <LeftNav />
            </NavContext.Provider>
        </BrowserRouter>
    );
    expect(container.querySelector('.leftnav.is-hidden-mobile')).not.toBeNull();
});

test('LeftNav is shown on mobile if isNavOpenMobile is true', () => {
    const { container } = render(
        <BrowserRouter>
            <NavContext.Provider value={{ isNavOpenMobile: true, dispatch: () => {} }}>
                <LeftNav />
            </NavContext.Provider>
        </BrowserRouter>
    );
    expect(container.querySelector('.leftnav.is-hidden-mobile')).toBeNull();
});

// test utils file
// function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
//     const Wrapper = ({ children }) => (
//         <Router history={history}>{children}</Router>
//     )
//     return {
//         ...render(ui, { wrapper: Wrapper }),
//         // adding `history` to the returned utilities to allow us
//         // to reference it in our tests (just try to avoid using
//         // this to test implementation details).
//         history,
//     }
// }