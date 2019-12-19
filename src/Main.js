import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as I from './Inputs';
import { Preview, Code } from './Outputs';
import './Css/App.scss';

function Main() {
	// States
	const [outputStyle, setOutputStyle] = useState({});
	const [outputCss, setOutputCss] = useState('');

	// Callback
	const updateOutput = useCallback((style, css) => {
		setOutputStyle(style);
		setOutputCss(css);
    }, []);
    
    // Routes
    const routesArray = [
        ['background-color', I.BackgroundColor], ['background-image', I.BackgroundImage],
        ['border', I.Border], ['border-radius', I.BorderRadius],
        ['box-shadow', I.BoxShadow], ['text-shadow', I.TextShadow]
    ];
    const routesElements = routesArray.map(obj => {
        let [rawPath, Component] = obj;
        if (rawPath === '') {
            return <Route key={rawPath} exact path="/"><div>Home</div></Route>;
        }
        return (
            <Route key={rawPath} path={`/${rawPath}`}>
                <Component updateOutput={updateOutput} />
            </Route>
        );
    });

	return (
        <main className="main">
            <div className="main__columns columns is-gapless">
                <div className="main__column column">
                    <Switch>
                        {routesElements}
                    </Switch>
                </div>
                <div className="main__column column">
                    <Preview outputStyle={outputStyle} />
                    <Code outputCss={outputCss} />
                </div>
            </div>
        </main>
	);
}

export default Main;

/*

<Route exact path="/"><div>Home</div></Route>
                        <Route path="/background-color"><I.BackgroundColor updateOutput={updateOutput} /></Route>
                        <Route path="/background-image"><I.BackgroundImage updateOutput={updateOutput} /></Route>
                        <Route path="/border"><I.Border updateOutput={updateOutput} /></Route>
                        <Route path="/border-radius"><I.BorderRadius updateOutput={updateOutput} /></Route>
                        <Route path="/box-shadow"><I.BoxShadow updateOutput={updateOutput} /></Route>
                        <Route path="/text-shadow"><I.TextShadow updateOutput={updateOutput} /></Route>

                        */