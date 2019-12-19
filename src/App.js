import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './Nav';
import * as I from './Inputs';
import { Preview, Code } from './Outputs';
import './Css/App.scss';

function App() {
	// States
	const [outputPreviewMode, setOutputPreviewMode] = useState('box');
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
								<Route path="/background-color"><I.BackgroundColor updateOutput={updateOutput} /></Route>
								<Route path="/background-image"><I.BackgroundImage updateOutput={updateOutput} /></Route>
								<Route path="/border"><I.Border updateOutput={updateOutput} /></Route>
								<Route path="/border-radius"><I.BorderRadius updateOutput={updateOutput} /></Route>
								<Route path="/box-shadow"><I.BoxShadow updateOutput={updateOutput} /></Route>
								<Route path="/text-shadow"><I.TextShadow updateOutput={updateOutput} /></Route>
							</Switch>
						</div>
						<div className="main__column column">
							<Preview outputPreviewMode={outputPreviewMode} outputStyle={outputStyle} />
							<Code outputCss={outputCss} />
						</div>
					</div>
				</main>
			</div>
		</Router>
	);
}

export default App;
