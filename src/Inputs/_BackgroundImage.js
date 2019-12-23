import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

function BgImage(props) {
    // Props & States
    const { updateOutput } = props;
    const [bgImage, setBgImage] = useState('https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg');
    const [bgSize, setBgSize] = useState('cover');
    const [bgPosition, setBgPosition] = useState('center');
    const [bgRepeat, setBgRepeat] = useState('no-repeat');
    const [bgColor, setBgColor] = useState('#000000');
    
    // Lifecycles
    useEffect(() => {
        const style = {
            backgroundColor: `${bgColor}`,
            backgroundImage: `url('${bgImage}')`,
            backgroundRepeat: `${bgRepeat}`,
            backgroundPosition: `${bgPosition}`,
            backgroundSize: `${bgSize}`
        };
        const css = `background-color: ${bgColor};\n` + 
                    `background-image: url('${bgImage}');\n` +
                    `background-repeat: ${bgRepeat};\n` +
                    `background-position: ${bgPosition};\n` +
                    `background-size: ${bgSize};`;
        updateOutput(style, css);
    }, [updateOutput, bgImage, bgSize, bgPosition, bgRepeat, bgColor]);

    // Elements
	const bgSizesArray = ['auto', 'cover', 'contain'];
	const bgSizesElements = bgSizesArray.map(value => 
		<option key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
    );
    const bgPositionsArray = [
        'left top', 'left center', 'left bottom',
        'center top', 'center', 'center bottom',
        'right top', 'right center', 'right bottom'
    ];
	const bgPositionsElements = bgPositionsArray.map(value => {
        const label = value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return (
            <option key={value} value={value}>{label}</option>
        )
    });
    const bgRepeatsArray = ['no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'];
	const bgRepeatsElements = bgRepeatsArray.map(value => {
        const label = value.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return (
            <option key={value} value={value}>{label}</option>
        )
    });

    return (
        <MainSection extraClass="main__section--inputs" title="Background Image" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Image URL</label>
                <div className="field">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="URL"
                            value={bgImage}
                            onChange={(e) => setBgImage(e.target.value)} />
                    </div>
                </div>
                <label className="label">Size</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={bgSize} 
                            onChange={(e) => setBgSize(e.target.value)} >
                            {bgSizesElements}
                        </select>
                    </div>
                </div>
                <label className="label">Position</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={bgPosition} 
                            onChange={(e) => setBgPosition(e.target.value)} >
                            {bgPositionsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Repeat</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={bgRepeat} 
                            onChange={(e) => setBgRepeat(e.target.value)} >
                            {bgRepeatsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Background Color (Support while loading image)</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)} />
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BgImage;