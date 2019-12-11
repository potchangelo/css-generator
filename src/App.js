import React, { useState, useCallback } from 'react';
import Nav from './Nav';
import { Border } from './Inputs';
import { Preview, Code } from './Outputs';
import './Css/App.scss';

function App() {
	// States
	const [outputStyle, setOutputStyle] = useState({});
	const [outputCss, setOutputCss] = useState('');

	// Callback
	const updateOutput = useCallback((style, css) => {
		setOutputStyle(style);
		setOutputCss(css);
	}, []);

	return (
		<div className="app">
			<Nav/>
			<main className="main">
				<div className="main__columns columns is-gapless">
					<div className="main__column column">
						<Border updateOutput={updateOutput} />
					</div>
					<div className="main__column column">
						<Preview outputStyle={outputStyle} />
						<Code outputCss={outputCss} />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
