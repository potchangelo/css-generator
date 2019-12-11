import React, { useState, useEffect } from 'react';
import Section from './__Section';

function BorderRadius(props) {
    // Props & States
    const {updateOutput} = props;
    const [borderRadius, setBorderRadius] = useState(12);
    
    // Lifecycles
    useEffect(() => {
        const style = {borderRadius: `${borderRadius}px`};
        const css = `border-radius: ${borderRadius}px;`;
        updateOutput(style, css);
    }, [updateOutput, borderRadius]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Radius (px)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="1"
                            max="40"
                            value={borderRadius}
                            onChange={(e) => setBorderRadius(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">1</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default BorderRadius;