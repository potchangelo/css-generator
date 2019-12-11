import React, { useState, useEffect } from 'react';
import Section from './__Section';

function Border(props) {
    // Props & States
    const {updateOutput} = props;
	const [borderColor, setBorderColor] = useState('#000000');
	const [borderStyle, setBorderStyle] = useState('solid');
    const [borderWidth, setBorderWidth] = useState(1);
    
    // Lifecycles
    useEffect(() => {
        const style = {border: `${borderWidth}px ${borderStyle} ${borderColor}`};
        const css = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;
        updateOutput(style, css);
    }, [updateOutput, borderColor, borderStyle, borderWidth]);

	// Elements
	const borderStylesArray = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
	const borderStylesElements = borderStylesArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
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
                <div className="field">
                    <label className="label">Style</label>
                    <div className="select is-fullwidth">
                        <select
                            value={borderStyle} 
                            onChange={(e) => setBorderStyle(e.target.value)} >
                            {borderStylesElements}
                        </select>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Width (px)</label>
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="1"
                            max="20"
                            value={borderWidth}
                            onChange={(e) => setBorderWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">1</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Border;