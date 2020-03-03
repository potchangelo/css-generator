import React, { useReducer } from 'react';
import { Dimmer, LeftNav, HeaderNav } from './Nav';
import Main from './Main';
import './Css/App.scss';

// Context
const NavContext = React.createContext({});

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

function App() {
	const [state, dispatch] = useReducer(reducer, initState);
	const { isNavOpenMobile } = state;
	return (
		<div className="app">
			<NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
				<Dimmer />
				<LeftNav />
				<HeaderNav />
			</NavContext.Provider>
			<Main />
		</div>
	);
}

export { NavContext };
export default App;