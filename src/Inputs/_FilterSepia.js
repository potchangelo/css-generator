import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterSepia(props) {
    // Props & States
    const {updateOutput} = props;
    const [sepia, setSepia] = useState(100);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `sepia(${sepia}%)`};
        const css = `filter: sepia(${sepia}%);`;
        updateOutput(style, css);
    }, [updateOutput, sepia]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Sepia (%)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="100"
                            value={sepia}
                            onChange={(e) => setSepia(e.target.value)} />
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

export default FilterSepia;