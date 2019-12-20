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
        ['box-shadow', I.BoxShadow], ['text-shadow', I.TextShadow],
        ['filter-blur', I.FilterBlur], ['filter-brightness', I.FilterBrightness],
        ['filter-contrast', I.FilterContrast], ['filter-grayscale', I.FilterGrayscale],
        ['filter-hue-rotate', I.FilterHueRotate], ['filter-invert', I.FilterInvert],
        ['filter-saturate', I.FilterSaturate], ['filter-sepia', I.FilterSepia],
        ['text', I.Text]
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
                <div className="main__column column is-6">
                    <div className="main__block--absolute">
                        <Switch>
                            {routesElements}
                        </Switch>
                    </div>
                </div>
                <div className="main__column column is-6">
                    <div className="main__block--absolute">
                        <Preview outputStyle={outputStyle} />
                        <Code outputCss={outputCss} />
                    </div>
                </div>
            </div>
        </main>
	);
}

export default Main;