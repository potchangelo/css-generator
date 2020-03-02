import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import * as I from './Inputs';
import { Preview, Code } from './Outputs';

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
        ['background-color', I.BackgroundColor], ['background-gradient', I.BackgroundGradient],
        ['background-image', I.BackgroundImage],
        ['border', I.Border], ['border-radius', I.BorderRadius], ['box-shadow', I.BoxShadow],
        ['filter-blur', I.FilterBlur], ['filter-brightness', I.FilterBrightness],
        ['filter-contrast', I.FilterContrast], ['filter-grayscale', I.FilterGrayscale],
        ['filter-hue-rotate', I.FilterHueRotate], ['filter-invert', I.FilterInvert],
        ['filter-saturate', I.FilterSaturate], ['filter-sepia', I.FilterSepia],
        ['text', I.Text], ['text-shadow', I.TextShadow],
        ['transform-translate', I.TransformTranslate], ['transform-rotate', I.TransformRotate],
        ['transform-scale', I.TransformScale], ['transform-skew', I.TransformSkew]
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
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                <Route path="*">
                    <div className="main__columns columns is-gapless">
                        <div className="main__column column is-6">
                            <div className="main__block">
                                <Switch>
                                    {routesElements}
                                </Switch>
                            </div>
                        </div>
                        <div className="main__column column is-6">
                            <div className="main__block">
                                <Preview outputStyle={outputStyle} />
                                <Code outputCss={outputCss} />
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </main>
	);
}

export default Main;