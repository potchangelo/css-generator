import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import { BackgroundColor, BackgroundImage, Border, BorderRadius } from './Inputs';
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
		<Router>
			<div className="app">
				<Nav/>
				<main className="main">
					<div className="main__columns columns is-gapless">
						<div className="main__column column">
							<Switch>
								<Route exact path="/"><div>Home</div></Route>
								<Route path="/background-color"><BackgroundColor updateOutput={updateOutput} /></Route>
								<Route path="/background-image"><BackgroundImage updateOutput={updateOutput} /></Route>
								<Route path="/border"><Border updateOutput={updateOutput} /></Route>
								<Route path="/border-radius"><BorderRadius updateOutput={updateOutput} /></Route>
							</Switch>
						</div>
						<div className="main__column column">
							<Preview outputStyle={outputStyle} />
							<Code outputCss={outputCss} />
						</div>
					</div>
				</main>
			</div>
		</Router>
	);
}

export default App;
