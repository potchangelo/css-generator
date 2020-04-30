import React, { useReducer } from 'react';
import { Dimmer, LeftNav, HeaderNav } from '.';

// Reducer
const initState = { isNavOpenMobile: false };
function reducer(state, action) {
    let newState = {};
    if (action.type === 'toggleNav') {
        newState = { isNavOpenMobile: !state.isNavOpenMobile };
    }
    if (action.type === 'closeNav') {
        newState = { isNavOpenMobile: false };
    }
    return newState;
}

// Context
const NavContext = React.createContext({});

function Nav() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { isNavOpenMobile } = state;

    return (
        <NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
            <Dimmer />
            <LeftNav />
            <HeaderNav />
        </NavContext.Provider>
    );
}

export default Nav;
export { NavContext };