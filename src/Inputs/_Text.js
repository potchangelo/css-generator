import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function Text(props) {
    // Props & States
    const { updateOutput } = props;
    const [textColor, setTextColor] = useState('#333333');
    const [textLineHeight, setTextLineHeight] = useState(1.5);
    const [textLetterSpacing, setTextLetterSpacing] = useState(0);
    const [textWordSpacing, setTextWordSpacing] = useState(0);
    const [textAlign, setTextAlign] = useState('left');
    const [textDecoration, setTextDecoration] = useState('none');
    const [textTransform, setTextTransform] = useState('none');
    
    // Lifecycles
    useEffect(() => {
        const style = {
            color: textColor,
            lineHeight: textLineHeight,
            letterSpacing: `${textLetterSpacing}px`,
            wordSpacing: `${textWordSpacing}px`,
            textAlign,
            textDecoration,
            textTransform
        };
        const css = `color: ${textColor};\n` + 
                    `line-height: ${textLineHeight}\n` + 
                    `letter-spacing: ${textLetterSpacing}px\n` + 
                    `word-spacing: ${textWordSpacing}px\n` + 
                    `text-align: ${textAlign}\n` + 
                    `text-decoration: ${textDecoration}\n` + 
                    `text-transform: ${textTransform}`;
        updateOutput(style, css);
    }, [
        updateOutput, textColor, textLineHeight, textLetterSpacing, textWordSpacing, 
        textAlign, textDecoration, textTransform
    ]);

    // Elements
    const textAlignsArray = ['left', 'center', 'right', 'justify'];
	const textAlignsElements = textAlignsArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );
    const textDecorationsArray = ['none', 'underline', 'overline', 'line-through'];
	const textDecorationsElements = textDecorationsArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );
    const textTransformsArray = ['none', 'capitalize', 'uppercase', 'lowercase'];
	const textTransformsElements = textTransformsArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );

    return (
        <MainSection extraClass="main__section--inputs" title="Text" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Line height</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="1"
                            max="2"
                            step="0.05"
                            value={textLineHeight}
                            onChange={(e) => setTextLineHeight(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">1</div>
                            <div className="item has-text-grey">2</div>
                        </div>
                    </div>
                </div>
                <label className="label">Letter spacing (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={textLetterSpacing}
                            onChange={(e) => setTextLetterSpacing(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Word spacing (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={textWordSpacing}
                            onChange={(e) => setTextWordSpacing(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Text align</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={textAlign} 
                            onChange={(e) => setTextAlign(e.target.value)} >
                            {textAlignsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Text decoration</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={textDecoration} 
                            onChange={(e) => setTextDecoration(e.target.value)} >
                            {textDecorationsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Text transform</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={textTransform} 
                            onChange={(e) => setTextTransform(e.target.value)} >
                            {textTransformsElements}
                        </select>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default Text;