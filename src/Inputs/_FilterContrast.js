import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function FilterContrast(props) {
    // Props & States
    const { updateOutput } = props;
    const [contrast, setContrast] = useState(150);
    
    // Lifecycles
    useEffect(() => {
        const style = { filter: `contrast(${contrast}%)` };
        const css = `filter: contrast(${contrast}%);`;
        updateOutput(style, css);
    }, [updateOutput, contrast]);

    return (
        <MainSection extraClass="main__section--inputs" title="Filter Contrast" subTitle="Customizing">
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
        </MainSection>
    );
}

export default FilterContrast;