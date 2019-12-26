import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function FilterSaturate(props) {
    // Props & States
    const { updateOutput } = props;
    const [saturate, setSaturate] = useState(150);
    
    // Lifecycles
    useEffect(() => {
        const style = { filter: `saturate(${saturate}%)` };
        const css = `filter: saturate(${saturate}%);`;
        updateOutput(style, css);
    }, [updateOutput, saturate]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Saturate" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Saturate (percent)</label>
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
        </MainSection>
    );
}

export default FilterSaturate;