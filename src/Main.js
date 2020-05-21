import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import * as I from './Input';
import { Preview, Code } from './Output';

const routeArray = [
    { url: 'background-gradient', Component: I.BackgroundGradient },
    { url: 'background-color', Component: I.BackgroundColor },
    { url: 'background-image', Component: I.BackgroundImage },
    { url: 'border', Component: I.Border },
    { url: 'border-radius', Component: I.BorderRadius },
    { url: 'box-shadow', Component: I.BoxShadow },
    { url: 'filter-blur', Component: I.FilterBlur },
    { url: 'filter-brightness', Component: I.FilterBrightness },
    { url: 'filter-contrast', Component: I.FilterContrast },
    { url: 'filter-grayscale', Component: I.FilterGrayscale },
    { url: 'filter-hue-rotate', Component: I.FilterHueRotate },
    { url: 'filter-invert', Component: I.FilterInvert },
    { url: 'filter-saturate', Component: I.FilterSaturate },
    { url: 'filter-sepia', Component: I.FilterSepia },
    { url: 'layout-float', Component: I.LayoutFloat },
    { url: 'layout-flexbox-items', Component: I.LayoutFlexboxItems },
    { url: 'layout-flexbox-menu-bar', Component: I.LayoutFlexboxMenu },
    { url: 'layout-flexbox-gallery', Component: I.LayoutFlexboxGallery },
    { url: 'text', Component: I.Text },
    { url: 'text-shadow', Component: I.TextShadow },
    { url: 'transform-translate', Component: I.TransformTranslate },
    { url: 'transform-rotate', Component: I.TransformRotate },
    { url: 'transform-scale', Component: I.TransformScale },
    { url: 'transform-skew', Component: I.TransformSkew }
];

function Main() {
    // States
    const [outputStyle, setOutputStyle] = useState({});
    const [outputCss, setOutputCss] = useState('');
    const [outputHtml, setOutputHtml] = useState('');

    // Callback
    const updateOutput = useCallback((style, css, html='') => {
        setOutputStyle(style);
        setOutputCss(css);
        setOutputHtml(html);
    }, []);

    // Routes
    const routesElements = routeArray.map(route => {
        let { url, Component } = route;
        return (
            <Route key={url} path={`/${url}`}>
                <Component updateOutput={updateOutput} />
            </Route>
        );
    });

    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Dashboard />
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
                                <Code outputCss={outputCss} outputHtml={outputHtml} />
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </main>
    );
}

export default Main;