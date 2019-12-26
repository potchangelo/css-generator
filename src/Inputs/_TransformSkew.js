import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function TransformSkew(props) {
    // Props & States
    const { updateOutput } = props;
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);
    
    // Lifecycles
    useEffect(() => {
        const style = { transform: `skew(${skewX}deg, ${skewY}deg)` };
        const css = `transform: skew(${skewX}deg, ${skewY}deg);`;
        updateOutput(style, css);
    }, [updateOutput, skewX, skewY]);

    return (
        <MainSection extraClass="main__section-inputs" title="Transform Skew" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Skew X (degrees)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-90"
                            max="90"
                            value={skewX}
                            onChange={(e) => setSkewX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-90</div>
                            <div className="item has-text-grey">90</div>
                        </div>
                    </div>
                </div>
                <label className="label">Skew Y (degrees)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="-90"
                            max="90"
                            value={skewY}
                            onChange={(e) => setSkewY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-90</div>
                            <div className="item has-text-grey">90</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default TransformSkew;