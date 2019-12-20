import React, { useState, useEffect } from 'react';
import {MainSection} from '../Parents';

function BackgroundColor(props) {
    // Props & States
    const {updateOutput} = props;
    const [backgroundColor, setBackgroundColor] = useState('#1988f7');
    
    // Lifecycles
    useEffect(() => {
        const style = {backgroundColor: `${backgroundColor}`};
        const css = `background-color: ${backgroundColor};`;
        updateOutput(style, css);
    }, [updateOutput, backgroundColor]);

    return (
        <MainSection extraClasses="main__section--inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Color</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)} />
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BackgroundColor;