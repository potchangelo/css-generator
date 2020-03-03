import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

const modeArray = [['all', 'One Value'], ['each', 'Individual']];
const radiusEachArray = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

function BorderRadius(props) {
    // Props, States
    const { updateOutput } = props;
    const [mode, setMode] = useState('all');
    const [radius, setRadius] = useState(12);
    const [radiusTl, setRadiusTl] = useState(12);
    const [radiusTr, setRadiusTr] = useState(12);
    const [radiusBr, setRadiusBr] = useState(12);
    const [radiusBl, setRadiusBl] = useState(12);

    // Lifecycles
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
    }, [
        updateOutput, mode, radius,
        radiusTl, radiusTr, radiusBr, radiusBl
    ]);

    // Elements
    const modeElements = modeArray.map(arr => {
        let classes = 'button';
        if (arr[0] === mode) classes += ' is-dark is-selected'
        return (
            <button
                key={arr[0]}
                className={classes}
                onClick={_ => setMode(arr[0])}>
                {arr[1]}
            </button>
        );
    });

    let radiusElements;
    if (mode === 'each') {
        radiusElements = radiusEachArray.map(value => {
            let st, fn;
            if (value === 'top-left') {
                st = radiusTl;
                fn = setRadiusTl;
            }
            else if (value === 'top-right') {
                st = radiusTr;
                fn = setRadiusTr;
            }
            else if (value === 'bottom-right') {
                st = radiusBr;
                fn = setRadiusBr;
            }
            else {
                st = radiusBl;
                fn = setRadiusBl;
            }
            return (
                <React.Fragment key={value}>
                    <label className="label">Radius {value} (pixels)</label>
                    <div className="field">
                        <div className="control__range control">
                            <input
                                type="range"
                                min="0"
                                max="40"
                                value={st}
                                onChange={e => fn(e.target.value)} />
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