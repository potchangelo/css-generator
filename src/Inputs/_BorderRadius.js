import React, { useState, useEffect } from 'react';
import Section from './__Section';

function BorderRadius(props) {
    // Props & States
    const {updateOutput} = props;
    const [mode, setMode] = useState('all');
    const [borderRadius, setBorderRadius] = useState(12);
    const [borderRadiusTl, setBorderRadiusTl] = useState(12);
    const [borderRadiusTr, setBorderRadiusTr] = useState(12);
    const [borderRadiusBr, setBorderRadiusBr] = useState(12);
    const [borderRadiusBl, setBorderRadiusBl] = useState(12);
    
    // Lifecycles
    useEffect(() => {
        let style, css;
        if (mode === 'each') {
            style = {borderRadius: `${borderRadiusTl}px ${borderRadiusTr}px ${borderRadiusBr}px ${borderRadiusBl}px`};
            css = `border-radius: ${borderRadiusTl}px ${borderRadiusTr}px ${borderRadiusBr}px ${borderRadiusBl}px;`;
        }
        else {
            style = {borderRadius: `${borderRadius}px`};
            css = `border-radius: ${borderRadius}px;`;
        }
        updateOutput(style, css);
    }, [
        updateOutput, mode, borderRadius, 
        borderRadiusTl, borderRadiusTr, borderRadiusBr, borderRadiusBl
    ]);

    // Elements
    const modeButtonsArray = [['One Value', 'all'], ['Individual', 'each']];
    const modeButtonsElements = modeButtonsArray.map(arr => {
        let classes = 'button';
        if (arr[1] === mode) classes += ' is-dark is-selected'
        return (
            <button 
                key={arr[1]} 
                className={classes} 
                onClick={() => {if (arr[1] !== mode) setMode(arr[1])}}>
                {arr[0]}
            </button>
        );
    });

    let borderRadiusElements;
    if (mode === 'each') {
        const borderRadiusArray = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
        borderRadiusElements = borderRadiusArray.map(value => {
            let st, fn;
            if (value === 'top-left') {
                st = borderRadiusTl;
                fn = setBorderRadiusTl;
            }
            else if (value === 'top-right') {
                st = borderRadiusTr;
                fn = setBorderRadiusTr;
            }
            else if (value === 'bottom-right') {
                st = borderRadiusBr;
                fn = setBorderRadiusBr;
            }
            else {
                st = borderRadiusBl;
                fn = setBorderRadiusBl;
            }
            return (
                <React.Fragment key={value}>
                    <label className="label">Radius {value} (px)</label>
                    <div className="field">
                        <div className="control__range control">
                            <input 
                                type="range"
                                min="0"
                                max="40"
                                value={st}
                                onChange={(e) => fn(e.target.value)} />
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
        borderRadiusElements = (
            <React.Fragment>
                <label className="label">Radius (px)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="40"
                            value={borderRadius}
                            onChange={(e) => setBorderRadius(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Mode</label>
                <div className="buttons has-addons">
                    {modeButtonsElements}
                </div>
                {borderRadiusElements}
            </div>
        </Section>
    );
}

export default BorderRadius;