import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

const modeArray = [
    { key: 'all', title: 'One Value'}, 
    { key: 'each', title: 'Individual'}
];
const styleArray = [
    'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'
];
const sideArray = ['top', 'right', 'bottom', 'left'];

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
    
    // Effects
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
        colorT, styleT, widthT, colorR, styleR, widthR,
        colorB, styleB, widthB, colorL, styleL, widthL
    ]);

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

    let borderElements;
    const styleElements = styleArray.map(style =>
        <option key={style} value={style}>{style.charAt(0).toUpperCase() + style.slice(1)}</option>
    );
    if (mode === 'each') {
        borderElements = sideArray.map(side => {
            let _color, _style, _width, _setColor, _setStyle, _setWidth;
            if (side === 'top') {
                _color = colorT;
                _style = styleT;
                _width = widthT;
                _setColor = setColorT;
                _setStyle = setStyleT;
                _setWidth = setWidthT;
            }
            else if (side === 'right') {
                _color = colorR;
                _style = styleR;
                _width = widthR;
                _setColor = setColorR;
                _setStyle = setStyleR;
                _setWidth = setWidthR;
            }
            else if (side === 'bottom') {
                _color = colorB;
                _style = styleB;
                _width = widthB;
                _setColor = setColorB;
                _setStyle = setStyleB;
                _setWidth = setWidthB;
            }
            else {
                _color = colorL;
                _style = styleL;
                _width = widthL;
                _setColor = setColorL;
                _setStyle = setStyleL;
                _setWidth = setWidthL;
            }
            return (
                <React.Fragment key={side}>
                    <h4 className="title has-margin-top is-5">Border {side}</h4>
                    <label className="label">Color</label>
                    <div className="field has-addons">
                        <div className="control__color control">
                            <input
                                className="input"
                                type="color"
                                value={_color}
                                onChange={e => _setColor(e.target.value)} />
                        </div>
                        <div className="control is-expanded">
                            <input
                                className="input"
                                type="text"
                                placeholder="HEX Color"
                                pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                                value={_color}
                                onChange={e => _setColor(e.target.value)} />
                        </div>
                    </div>
                    <label className="label">Style</label>
                    <div className="field">
                        <div className="select is-fullwidth">
                            <select
                                value={_style}
                                onChange={e => _setStyle(e.target.value)} >
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
                                value={_width}
                                onChange={e => _setWidth(e.target.value)} />
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