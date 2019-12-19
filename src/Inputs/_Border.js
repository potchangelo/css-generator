import React, { useState, useEffect } from 'react';
import Section from './__Section';

function Border(props) {
    // Props & States
    const {updateOutput} = props;
    const [mode, setMode] = useState('all');
	const [borderColor, setBorderColor] = useState('#000000');
	const [borderStyle, setBorderStyle] = useState('solid');
    const [borderWidth, setBorderWidth] = useState(1);

    const [borderColorT, setBorderColorT] = useState('#000000');
	const [borderStyleT, setBorderStyleT] = useState('solid');
    const [borderWidthT, setBorderWidthT] = useState(1);

    const [borderColorR, setBorderColorR] = useState('#000000');
	const [borderStyleR, setBorderStyleR] = useState('solid');
    const [borderWidthR, setBorderWidthR] = useState(1);

    const [borderColorB, setBorderColorB] = useState('#000000');
	const [borderStyleB, setBorderStyleB] = useState('solid');
    const [borderWidthB, setBorderWidthB] = useState(1);

    const [borderColorL, setBorderColorL] = useState('#000000');
	const [borderStyleL, setBorderStyleL] = useState('solid');
    const [borderWidthL, setBorderWidthL] = useState(1);
    
    // Lifecycles
    useEffect(() => {
        let style = {}, css = '';
        if (mode === 'each') {
            if (borderWidthT > 0) {
                style.borderTop = `${borderWidthT}px ${borderStyleT} ${borderColorT}`;
                css += `border-top: ${borderWidthT}px ${borderStyleT} ${borderColorT};\n`;
            }
            if (borderWidthR > 0) {
                style.borderRight = `${borderWidthR}px ${borderStyleR} ${borderColorR}`;
                css += `border-right: ${borderWidthR}px ${borderStyleR} ${borderColorR};\n`;
            }
            if (borderWidthB > 0) {
                style.borderBottom = `${borderWidthB}px ${borderStyleB} ${borderColorB}`;
                css += `border-bottom: ${borderWidthB}px ${borderStyleB} ${borderColorB};\n`;
            }
            if (borderWidthL > 0) {
                style.borderLeft = `${borderWidthL}px ${borderStyleL} ${borderColorL}`;
                css += `border-left: ${borderWidthL}px ${borderStyleL} ${borderColorL};`;
            }
        }
        else {
            style = {border: `${borderWidth}px ${borderStyle} ${borderColor}`};
            css = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;
        }
        updateOutput(style, css);
    }, [
        updateOutput, mode, borderColor, borderStyle, borderWidth, 
        borderColorT, borderStyleT, borderWidthT, 
        borderColorR, borderStyleR, borderWidthR, 
        borderColorB, borderStyleB, borderWidthB, 
        borderColorL, borderStyleL, borderWidthL
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

    let borderElements;
    const borderStylesArray = [
        'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'
    ];
    const borderStylesElements = borderStylesArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );
    if (mode === 'each') {
        const bordersArray = ['top', 'right', 'bottom', 'left'];
        borderElements = bordersArray.map(value => {
            let stColor, stStyle, stWidth, fnColor, fnStyle, fnWidth;
            if (value === 'top') {
                stColor = borderColorT;
                stStyle = borderStyleT;
                stWidth = borderWidthT;
                fnColor = setBorderColorT;
                fnStyle = setBorderStyleT;
                fnWidth = setBorderWidthT;
            }
            else if (value === 'right') {
                stColor = borderColorR;
                stStyle = borderStyleR;
                stWidth = borderWidthR;
                fnColor = setBorderColorR;
                fnStyle = setBorderStyleR;
                fnWidth = setBorderWidthR;
            }
            else if (value === 'bottom') {
                stColor = borderColorB;
                stStyle = borderStyleB;
                stWidth = borderWidthB;
                fnColor = setBorderColorB;
                fnStyle = setBorderStyleB;
                fnWidth = setBorderWidthB;
            }
            else {
                stColor = borderColorL;
                stStyle = borderStyleL;
                stWidth = borderWidthL;
                fnColor = setBorderColorL;
                fnStyle = setBorderStyleL;
                fnWidth = setBorderWidthL;
            }
            return (
                <React.Fragment key={value}>
                    <h4 className="title is-5">Border {value.charAt(0).toUpperCase() + value.slice(1)}</h4>
                    <label className="label">Color</label>
                    <div className="field has-addons">
                        <div className="control__color control">
                            <input 
                                className="input"
                                type="color" 
                                value={stColor}
                                onChange={(e) => fnColor(e.target.value)} />
                        </div>
                        <div className="control is-expanded">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="HEX Color"
                                pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                                value={stColor}
                                onChange={(e) => fnColor(e.target.value)} />
                        </div>
                    </div>
                    <label className="label">Style</label>
                    <div className="field">
                        <div className="select is-fullwidth">
                            <select
                                value={stStyle} 
                                onChange={(e) => fnStyle(e.target.value)} >
                                {borderStylesElements}
                            </select>
                        </div>
                    </div>
                    <label className="label">Width (px)</label>
                    <div className="field">
                        <div className="control__range control">
                            <input 
                                type="range"
                                min="0"
                                max="20"
                                value={stWidth}
                                onChange={(e) => fnWidth(e.target.value)} />
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
            <React.Fragment>
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Style</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={borderStyle} 
                            onChange={(e) => setBorderStyle(e.target.value)} >
                            {borderStylesElements}
                        </select>
                    </div>
                </div>
                <label className="label">Width (px)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="20"
                            value={borderWidth}
                            onChange={(e) => setBorderWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
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
                {borderElements}
            </div>
        </Section>
    );
}

export default Border;