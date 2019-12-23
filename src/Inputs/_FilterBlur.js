import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function FilterBlur(props) {
    // Props & States
    const { updateOutput } = props;
    const [blur, setBlur] = useState(4);
    
    // Lifecycles
    useEffect(() => {
        const style = { filter: `blur(${blur}px)` };
        const css = `filter: blur(${blur}px);`;
        updateOutput(style, css);
    }, [updateOutput, blur]);

    return (
        <MainSection extraClass="main__section--inputs" title="Filter Blur" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Blur (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="50"
                            value={blur}
                            onChange={(e) => setBlur(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">50</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default FilterBlur;