import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

function BackgroundColor(props) {
    // Props ,States
    const { updateOutput } = props;
    const [color, setColor] = useState('#1988f7');

    // Effects
    useEffect(() => {
        const style = { backgroundColor: `${color}` };
        const css = `background-color: ${color};`;
        updateOutput(style, css);
    }, [updateOutput, color]);

    return (
        <MainSection extraClass="main__section-inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
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
            </div>
        </MainSection>
    );
}

export default BackgroundColor;