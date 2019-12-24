import React, { useReducer } from 'react';
import { Dimmer, LeftNav, HeaderNav } from './Nav';
import Main from './Main';
import './Css/App.scss';

const NavContext = React.createContext(false);

const initState = false;
function reducer(state, action) {
    switch (action.type) {
        case 'toggleNav':
			return !state;
		case 'close':
			return false
    }
}

function App() {
	const [isNavOpenMobile, dispatch] = useReducer(reducer, initState);
	return (
		<div className="app">
			<NavContext.Provider value={{ isNavOpenMobile, dispatch }}>
				<Dimmer/>
				<LeftNav/>
				<HeaderNav/>
			</NavContext.Provider>
			<Main/>
		</div>
	);
}

export { NavContext };
export default App;