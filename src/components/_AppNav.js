import { useLocation } from '@reach/router';
import React, { useEffect, useReducer } from 'react';
import AppNavLeftbar from './_AppNavLeftbar';
import AppNavHeader from './_AppNavHeader';
import AppNavDimmer from './_AppNavDimmer';

// - Reducer
const initState = { isNavOpenMobile: false };
function reducer(state, action) {
  let newState = initState;
  if (action.type === 'toggleNav') {
    newState = { isNavOpenMobile: !state.isNavOpenMobile };
  }
  if (action.type === 'closeNav') {
    newState = { isNavOpenMobile: false };
  }
  return newState;
}

// - Context
/**
 * @type {React.Context<{isNavOpenMobile: boolean, dispatch: import('react').DispatchWithoutAction}>}
 */
const NavContext = React.createContext({});

function _AppNav() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { isNavOpenMobile } = state;
  const location = useLocation();

  useEffect(() => {
    dispatch({ type: 'closeNav' });
  }, [location.pathname]);

  return (
    <NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
      <AppNavLeftbar />
      <AppNavHeader />
      <AppNavDimmer />
    </NavContext.Provider>
  );
}

export default _AppNav;
export { NavContext as _NavContext };
