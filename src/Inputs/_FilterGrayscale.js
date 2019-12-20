import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterGrayscale(props) {
    // Props & States
    const {updateOutput} = props;
    const [grayscale, setGrayscale] = useState(100);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `grayscale(${grayscale}%)`};
        const css = `filter: grayscale(${grayscale}%);`;
        updateOutput(style, css);
    }, [updateOutput, grayscale]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Grayscale (%)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={grayscale}
                            onChange={(e) => setGrayscale(e.target.value)} />
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

export default FilterGrayscale;