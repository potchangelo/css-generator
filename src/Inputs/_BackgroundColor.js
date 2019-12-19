import React, { useState, useEffect } from 'react';
import Section from './__Section';

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
        <Section>
            <h4 className="title is-4">Custom</h4>
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
        </Section>
    );
}

export default BackgroundColor;