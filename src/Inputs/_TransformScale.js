import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function TransformScale(props) {
    // Props, States
    const { updateOutput } = props;
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);
    
    // Effects
    useEffect(() => {
        const style = { transform: `scale(${scaleX}, ${scaleY})` };
        const css = `transform: scale(${scaleX}, ${scaleY});`;
        updateOutput(style, css);
    }, [updateOutput, scaleX, scaleY]);

    return (
        <MainSection extraClass="main__section-inputs" title="Transform Scale" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Scale width (factor)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="2.5"
                            step="0.1"
                            value={scaleX}
                            onChange={(e) => setScaleX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">3</div>
                        </div>
                    </div>
                </div>
                <label className="label">Scale height (factor)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="2.5"
                            step="0.1"
                            value={scaleY}
                            onChange={(e) => setScaleY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">3</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default TransformScale;