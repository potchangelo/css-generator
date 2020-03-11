import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';
import { colorHexToRgba } from '../Helpers';

function BoxShadow(props) {
    // Props, States
    const { updateOutput } = props;
    const [x, setX] = useState(2);
    const [y, setY] = useState(2);
    const [blur, setBlur] = useState(8);
    const [spread, setSpread] = useState(4);
    const [color, setColor] = useState('#000000');
    const [colorAlpha, setColorAlpha] = useState(0.1);

    // Effects
    useEffect(() => {
        const colorOutput = colorHexToRgba(color, colorAlpha);
        const style = { boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${colorOutput}` };
        const css = `box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${colorOutput};`;
        updateOutput(style, css);
    }, [updateOutput, x, y, blur, spread, color, colorAlpha]);

    return (
        <MainSection extraClass="main__section-inputs" title="Box Shadow" subTitle="Customizing">
            <div className="inputs">
                <label className="label">X (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="-10"
                            max="10"
                            value={x}
                            onChange={e => setX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Y (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="-10"
                            max="10"
                            value={y}
                            onChange={e => setY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-10</div>
                            <div className="item has-text-grey">10</div>
                        </div>
                    </div>
                </div>
                <label className="label">Blur (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={blur}
                            onChange={e => setBlur(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">20</div>
                        </div>
                    </div>
                </div>
                <label className="label">Spread (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="20"
                            value={spread}
                            onChange={e => setSpread(e.target.value)} />
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
                <label className="label">Color opacity</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={colorAlpha}
                            onChange={e => setColorAlpha(Number(e.target.value))} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BoxShadow;