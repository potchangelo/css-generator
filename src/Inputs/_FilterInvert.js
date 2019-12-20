import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterInvert(props) {
    // Props & States
    const {updateOutput} = props;
    const [invert, setInvert] = useState(100);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `invert(${invert}%)`};
        const css = `filter: invert(${invert}%);`;
        updateOutput(style, css);
    }, [updateOutput, invert]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Invert (%)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={invert}
                            onChange={(e) => setInvert(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">100</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default FilterInvert;