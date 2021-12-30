import React, { useReducer } from 'react';
import AppNavLeftbar from './_AppNavLeftbar';
import AppNavHeader from './_AppNavHeader';
import AppNavDimmer from './_AppNavDimmer';

// - Reducer
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

// - Context
const NavContext = React.createContext({});

function _AppNav() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { isNavOpenMobile } = state;

  return (
    <NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
      <AppNavLeftbar />
      <AppNavHeader />
      <AppNavDimmer />
    </NavContext.Provider>
  );
}

export default _AppNav;
export { NavContext };
