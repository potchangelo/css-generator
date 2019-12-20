import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterSaturate(props) {
    // Props & States
    const {updateOutput} = props;
    const [saturate, setSaturate] = useState(150);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `saturate(${saturate}%)`};
        const css = `filter: saturate(${saturate}%);`;
        updateOutput(style, css);
    }, [updateOutput, saturate]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Saturate (%)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="300"
                            value={saturate}
                            onChange={(e) => setSaturate(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">300</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default FilterSaturate;