import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function TransformTranslate(props) {
    // Props & States
    const { updateOutput } = props;
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [unitX, setUnitX] = useState('px');
    const [unitY, setUnitY] = useState('px');
    
    // Lifecycles
    useEffect(() => {
        const style = { transform: `translate(${translateX}${unitX}, ${translateY}${unitY})` };
        const css = `transform: translate(${translateX}${unitX}, ${translateY}${unitY});`;
        updateOutput(style, css);
    }, [updateOutput, translateX, translateY, unitX, unitY]);

    return (
        <MainSection extraClass="main__section-inputs" title="Transform Translate" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Translate X</label>
                <div className="field has-addons">
                    <div className="control__range control is-expanded">
                        <input 
                            type="range"
                            min="-200"
                            max="200"
                            value={translateX}
                            onChange={(e) => setTranslateX(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-200</div>
                            <div className="item has-text-grey">200</div>
                        </div>
                    </div>
                    <div className="control">
                        <span className="select">
                            <select
                                value={unitX} 
                                onChange={(e) => setUnitX(e.target.value)} >
                                <option value="px">pixels</option>
                                <option value="%">percent</option>
                            </select>
                        </span>
                    </div>
                </div>
                <label className="label">Translate Y</label>
                <div className="field has-addons">
                    <div className="control__range control is-expanded">
                        <input 
                            type="range"
                            min="-200"
                            max="200"
                            value={translateY}
                            onChange={(e) => setTranslateY(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">-200</div>
                            <div className="item has-text-grey">200</div>
                        </div>
                    </div>
                    <div className="control">
                        <span className="select">
                            <select
                                value={unitY} 
                                onChange={(e) => setUnitY(e.target.value)} >
                                <option value="px">pixels</option>
                                <option value="%">percent</option>
                            </select>
                        </span>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default TransformTranslate;