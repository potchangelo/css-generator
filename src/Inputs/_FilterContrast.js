import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterContrast(props) {
    // Props & States
    const {updateOutput} = props;
    const [contrast, setContrast] = useState(150);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `contrast(${contrast}%)`};
        const css = `filter: contrast(${contrast}%);`;
        updateOutput(style, css);
    }, [updateOutput, contrast]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Contrast (%)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="300"
                            value={contrast}
                            onChange={(e) => setContrast(e.target.value)} />
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

export default FilterContrast;