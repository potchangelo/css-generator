import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

const modeArray = [['all', 'One Value'], ['each', 'Individual']];
const styleArray = [
    'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'
];
const borderEachArray = ['top', 'right', 'bottom', 'left'];

function Border(props) {
    // Props, States
    const { updateOutput } = props;
    const [mode, setMode] = useState('all');
    const [color, setColor] = useState('#000000');
    const [styleAll, setStyleAll] = useState('solid');
    const [width, setWidth] = useState(1);

    const [colorT, setColorT] = useState('#000000');
    const [styleT, setStyleT] = useState('solid');
    const [widthT, setWidthT] = useState(1);

    const [colorR, setColorR] = useState('#000000');
    const [styleR, setStyleR] = useState('solid');
    const [widthR, setWidthR] = useState(1);

    const [colorB, setColorB] = useState('#000000');
    const [styleB, setStyleB] = useState('solid');
    const [widthB, setWidthB] = useState(1);

    const [colorL, setColorL] = useState('#000000');
    const [styleL, setStyleL] = useState('solid');
    const [widthL, setWidthL] = useState(1);
    
    // Lifecycles
    useEffect(() => {
        let style = {}, css = '';
        if (mode === 'each') {
            if (widthT > 0) {
                style.borderTop = `${widthT}px ${styleT} ${colorT}`;
                css += `border-top: ${widthT}px ${styleT} ${colorT};\n`;
            }
            if (widthR > 0) {
                style.borderRight = `${widthR}px ${styleR} ${colorR}`;
                css += `border-right: ${widthR}px ${styleR} ${colorR};\n`;
            }
            if (widthB > 0) {
                style.borderBottom = `${widthB}px ${styleB} ${colorB}`;
                css += `border-bottom: ${widthB}px ${styleB} ${colorB};\n`;
            }
            if (widthL > 0) {
                style.borderLeft = `${widthL}px ${styleL} ${colorL}`;
                css += `border-left: ${widthL}px ${styleL} ${colorL};`;
            }
        }
        else {
            style = { border: `${width}px ${styleAll} ${color}` };
            css = `border: ${width}px ${styleAll} ${color};`;
        }
        updateOutput(style, css);
    }, [
        updateOutput, mode, color, styleAll, width,
        colorT, styleT, widthT,
        colorR, styleR, widthR,
        colorB, styleB, widthB,
        colorL, styleL, widthL
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

    let borderElements;
    const styleElements = styleArray.map(value =>
        <option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );
    if (mode === 'each') {
        borderElements = borderEachArray.map(value => {
            let stColor, stStyle, stWidth, fnColor, fnStyle, fnWidth;
            if (value === 'top') {
                stColor = colorT;
                stStyle = styleT;
                stWidth = widthT;
                fnColor = setColorT;
                fnStyle = setStyleT;
                fnWidth = setWidthT;
            }
            else if (value === 'right') {
                stColor = colorR;
                stStyle = styleR;
                stWidth = widthR;
                fnColor = setColorR;
                fnStyle = setStyleR;
                fnWidth = setWidthR;
            }
            else if (value === 'bottom') {
                stColor = colorB;
                stStyle = styleB;
                stWidth = widthB;
                fnColor = setColorB;
                fnStyle = setStyleB;
                fnWidth = setWidthB;
            }
            else {
                stColor = colorL;
                stStyle = styleL;
                stWidth = widthL;
                fnColor = setColorL;
                fnStyle = setStyleL;
                fnWidth = setWidthL;
            }
            return (
                <React.Fragment key={value}>
                    <h4 className="title has-margin-top is-5">Border {value}</h4>
                    <label className="label">Color</label>
                    <div className="field has-addons">
                        <div className="control__color control">
                            <input
                                className="input"
                                type="color"
                                value={stColor}
                                onChange={e => fnColor(e.target.value)} />
                        </div>
                        <div className="control is-expanded">
                            <input
                                className="input"
                                type="text"
                                placeholder="HEX Color"
                                pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                                value={stColor}
                                onChange={e => fnColor(e.target.value)} />
                        </div>
                    </div>
                    <label className="label">Style</label>
                    <div className="field">
                        <div className="select is-fullwidth">
                            <select
                                value={stStyle}
                                onChange={e => fnStyle(e.target.value)} >
                                {styleElements}
                            </select>
                        </div>
                    </div>
                    <label className="label">Width (pixels)</label>
                    <div className="field">
                        <div className="control__range control">
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={stWidth}
                                onChange={e => fnWidth(e.target.value)} />
                            <div className="control__range--text">
                                <div className="item has-text-grey">0</div>
                                <div className="item has-text-grey">20</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        });
    }
    else {
        borderElements = (
            <>
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input
                            className="input"
                            type="color"
                            value={color}
                            onChange={e => setColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input
                            className="input"
                            type="text"
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={color}
                            onChange={e => setColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Style</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={styleAll}
                            onChange={e => setStyleAll(e.target.value)} >
                            {styleElements}
                        </select>
                    </div>
                </div>
                <label className="label">Width (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={width}
                            onChange={e => setWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <MainSection extraClass="main__section-inputs" title="Border" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Mode</label>
                <div className="buttons has-addons">
                    {modeElements}
                </div>
                {borderElements}
            </div>
        </MainSection>
    );
}

export default Border;