import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function TransformRotate(props) {
    // Props, States
    const { updateOutput } = props;
    const [rotate, setRotate] = useState(0);
    
    // Effects
    useEffect(() => {
        const style = { transform: `rotate(${rotate}deg)` };
        const css = `transform: rotate(${rotate}deg);`;
        updateOutput(style, css);
    }, [updateOutput, rotate]);

    return (
        <MainSection extraClass="main__section-inputs" title="Transform Rotate" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Rotate (degrees)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="360"
                            value={rotate}
                            onChange={(e) => setRotate(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">360</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default TransformRotate;