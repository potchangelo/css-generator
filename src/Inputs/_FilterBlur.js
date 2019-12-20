import React, { useState, useEffect } from 'react';
import Section from './__Section';

function FilterBlur(props) {
    // Props & States
    const {updateOutput} = props;
    const [blur, setBlur] = useState(4);
    
    // Lifecycles
    useEffect(() => {
        const style = {filter: `blur(${blur}px)`};
        const css = `filter: blur(${blur}px);`;
        updateOutput(style, css);
    }, [updateOutput, blur]);

    return (
        <Section>
            <h4 className="title is-4">Custom</h4>
            <div className="inputs">
                <label className="label">Blur (px)</label>
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
        </Section>
    );
}

export default FilterBlur;