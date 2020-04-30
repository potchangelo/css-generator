import './Css/App.scss';
import React from 'react';
import { Nav } from './Nav';
import Main from './Main';

function App() {
	return (
		<div className="app">
			<Nav />
			<Main />
		</div>
	);
}

export default App;