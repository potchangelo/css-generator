import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

const textAlignArray = ['left', 'center', 'right', 'justify'];
const textDecorationArray = ['none', 'underline', 'overline', 'line-through'];
const textTransformArray = ['none', 'capitalize', 'uppercase', 'lowercase'];

function Text(props) {
    // Props, States
    const { updateOutput } = props;
    const [color, setTextColor] = useState('#333333');
    const [lineHeight, setTextLineHeight] = useState(1.5);
    const [letterSpacing, setTextLetterSpacing] = useState(0);
    const [wordSpacing, setTextWordSpacing] = useState(0);
    const [textAlign, setTextAlign] = useState('left');
    const [textDecoration, setTextDecoration] = useState('none');
    const [textTransform, setTextTransform] = useState('none');
    
    // Effects
    useEffect(() => {
        const style = {
            color,
            lineHeight,
            letterSpacing: `${letterSpacing}px`,
            wordSpacing: `${wordSpacing}px`,
            textAlign,
            textDecoration,
            textTransform
        };
        const css = `color: ${color};\n` + 
                    `line-height: ${lineHeight}\n` + 
                    `letter-spacing: ${letterSpacing}px\n` + 
                    `word-spacing: ${wordSpacing}px\n` + 
                    `text-align: ${textAlign}\n` + 
                    `text-decoration: ${textDecoration}\n` + 
                    `text-transform: ${textTransform}`;
        updateOutput(style, css);
    }, [
        updateOutput, color, lineHeight, letterSpacing, wordSpacing, 
        textAlign, textDecoration, textTransform
    ]);

    // Elements
	const textAlignElements = textAlignArray.map(align => 
		<option key={align} value={align}>{align.charAt(0).toUpperCase() + align.slice(1)}</option>
    );
    
	const textDecorationElements = textDecorationArray.map(decoration => 
		<option key={decoration} value={decoration}>{decoration.charAt(0).toUpperCase() + decoration.slice(1)}</option>
    );
    
	const textTransformElements = textTransformArray.map(transform => 
		<option key={transform} value={transform}>{transform.charAt(0).toUpperCase() + transform.slice(1)}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Text" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={color}
                            onChange={(e) => setTextColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={color}
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
                            value={lineHeight}
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
                            value={letterSpacing}
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
                            value={wordSpacing}
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
                            {textAlignElements}
                        </select>
                    </div>
                </div>
                <label className="label">Text decoration</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={textDecoration} 
                            onChange={(e) => setTextDecoration(e.target.value)} >
                            {textDecorationElements}
                        </select>
                    </div>
                </div>
                <label className="label">Text transform</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={textTransform} 
                            onChange={(e) => setTextTransform(e.target.value)} >
                            {textTransformElements}
                        </select>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default Text;