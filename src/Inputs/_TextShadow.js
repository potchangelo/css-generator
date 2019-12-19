import React, { useState, useEffect } from 'react';
import Section from './__Section';
import { hexToRgba } from '../Helpers'

function TextShadow(props) {
    // Props & States
    const {updateOutput} = props;
    const [shadowX, setShadowX] = useState(1);
    const [shadowY, setShadowY] = useState(1);
    const [shadowBlur, setShadowBlur] = useState(2);
    const [shadowColor, setShadowColor] = useState('#1988f7');
    const [shadowColorAlpha, setShadowColorAlpha] = useState(0.8);
    
    // Lifecycles
    useEffect(() => {
        const shadowColorOutput = hexToRgba(shadowColor, shadowColorAlpha);
        const style = {textShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColorOutput}`};
        const css = `text-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColorOutput};`;
        updateOutput(style, css);
    }, [updateOutput, shadowX, shadowY, shadowBlur, shadowColor, shadowColorAlpha]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">X</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-10"
                            max="10"
                            value={shadowX}
                            onChange={(e) => setShadowX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Y</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-10"
                            max="10"
                            value={shadowY}
                            onChange={(e) => setShadowY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Blur</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="20"
                            value={shadowBlur}
                            onChange={(e) => setShadowBlur(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={shadowColor}
                            onChange={(e) => setShadowColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={shadowColor}
                            onChange={(e) => setShadowColor(e.target.value)} />
                    </div>
                </div>
                <label className="label">Color opacity</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={shadowColorAlpha}
                            onChange={(e) => setShadowColorAlpha(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default TextShadow;