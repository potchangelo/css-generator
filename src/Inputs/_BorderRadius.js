import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

const modeArray = [
    { key: 'all', title: 'One Value' }, 
    { key: 'each', title: 'Individual' }
];
const sideArray = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

function BorderRadius(props) {
    // Props, States
    const { updateOutput } = props;
    const [mode, setMode] = useState('all');
    const [radius, setRadius] = useState(12);
    const [radiusTl, setRadiusTl] = useState(12);
    const [radiusTr, setRadiusTr] = useState(12);
    const [radiusBr, setRadiusBr] = useState(12);
    const [radiusBl, setRadiusBl] = useState(12);

    // Effects
    useEffect(() => {
        let style, css;
        if (mode === 'each') {
            style = { borderRadius: `${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px` };
            css = `border-radius: ${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px;`;
        }
        else {
            style = { borderRadius: `${radius}px` };
            css = `border-radius: ${radius}px;`;
        }
        updateOutput(style, css);
    }, [updateOutput, mode, radius, radiusTl, radiusTr, radiusBr, radiusBl]);

    // Elements
    const modeElements = modeArray.map(_mode => {
        let classes = 'button';
        if (_mode.key === mode) classes += ' is-dark is-selected'
        return (
            <button
                key={_mode.key}
                className={classes}
                onClick={_ => setMode(_mode.key)}>
                {_mode.title}
            </button>
        );
    });

    let radiusElements;
    if (mode === 'each') {
        radiusElements = sideArray.map(side => {
            let _radius, _setRadius;
            if (side === 'top-left') {
                _radius = radiusTl;
                _setRadius = setRadiusTl;
            }
            else if (side === 'top-right') {
                _radius = radiusTr;
                _setRadius = setRadiusTr;
            }
            else if (side === 'bottom-right') {
                _radius = radiusBr;
                _setRadius = setRadiusBr;
            }
            else {
                _radius = radiusBl;
                _setRadius = setRadiusBl;
            }
            return (
                <React.Fragment key={side}>
                    <label className="label">Radius {side} (pixels)</label>
                    <div className="field">
                        <div className="control__range control">
                            <input
                                type="range"
                                min="0"
                                max="40"
                                value={_radius}
                                onChange={e => _setRadius(e.target.value)} />
                            <div className="control__range--text">
                                <div className="item has-text-grey">0</div>
                                <div className="item has-text-grey">40</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        });
    }
    else {
        radiusElements = (
            <>
                <label className="label">Radius (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="40"
                            value={radius}
                            onChange={e => setRadius(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <MainSection extraClass="main__section-inputs" title="Border Radius" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Mode</label>
                <div className="buttons has-addons">
                    {modeElements}
                </div>
                {radiusElements}
            </div>
        </MainSection>
    );
}

export default BorderRadius;