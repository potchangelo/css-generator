import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function FilterInvert(props) {
    // Props, States
    const { updateOutput } = props;
    const [invert, setInvert] = useState(100);
    
    // Effects
    useEffect(() => {
        const style = { filter: `invert(${invert}%)` };
        const css = `filter: invert(${invert}%);`;
        updateOutput(style, css);
    }, [invert]);

    return (
        <MainSection extraClass="main__section-inputs" title="Filter Invert" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Invert (percent)</label>
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
        </MainSection>
    );
}

export default FilterInvert;