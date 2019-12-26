import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function FilterSepia(props) {
    // Props & States
    const { updateOutput } = props;
    const [sepia, setSepia] = useState(100);
    
    // Lifecycles
    useEffect(() => {
        const style = { filter: `sepia(${sepia}%)` };
        const css = `filter: sepia(${sepia}%);`;
        updateOutput(style, css);
    }, [updateOutput, sepia]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Sepia" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Sepia (percent)</label>
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
        </MainSection>
    );
}

export default FilterSepia;