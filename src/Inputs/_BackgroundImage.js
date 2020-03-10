import React, { useState, useEffect } from 'react';
import { MainSection } from '../Parents';

const positionArray = [
    'left top', 'left center', 'left bottom',
    'center top', 'center', 'center bottom',
    'right top', 'right center', 'right bottom'
];
const sizeArray = ['auto', 'cover', 'contain'];
const repeatArray = ['no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'];

function BackgroundImage(props) {
    // Props ,States
    const { updateOutput } = props;
    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg');
    const [position, setPosition] = useState('center');
    const [size, setSize] = useState('cover');
    const [repeat, setRepeat] = useState('no-repeat');
    const [color, setColor] = useState('#000000');
    
    // Effects
    useEffect(() => {
        const style = {
            backgroundColor: `${color}`,
            backgroundImage: `url('${image}')`,
            backgroundPosition: `${position}`,
            backgroundSize: `${size}`,
            backgroundRepeat: `${repeat}`,
        };
        const css = `background-color: ${color};\n` + 
                    `background-image: url('${image}');\n` +
                    `background-position: ${position};\n` +
                    `background-size: ${size};\n` + 
                    `background-repeat: ${repeat};`;
        updateOutput(style, css);
    }, [image, position, size, repeat, color]);

    // Elements
    const positionElements = positionArray.map(_position => {
        const label = _position.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return (
            <option key={_position} value={_position}>{label}</option>
        );
    });

	const sizeElements = sizeArray.map(_size => 
		<option key={_size} value={_size}>{_size.charAt(0).toUpperCase() + _size.slice(1)}</option>
    );

	const repeatElements = repeatArray.map(_repeat => {
        const label = _repeat.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return (
            <option key={_repeat} value={_repeat}>{label}</option>
        );
    });

    return (
        <MainSection extraClass="main__section-inputs" title="Background Image" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Image URL</label>
                <div className="field">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="URL"
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                    </div>
                </div>
                <label className="label">Position</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={position} 
                            onChange={e => setPosition(e.target.value)} >
                            {positionElements}
                        </select>
                    </div>
                </div>
                <label className="label">Size</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={size} 
                            onChange={e => setSize(e.target.value)} >
                            {sizeElements}
                        </select>
                    </div>
                </div>
                <label className="label">Repeat</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={repeat} 
                            onChange={e => setRepeat(e.target.value)} >
                            {repeatElements}
                        </select>
                    </div>
                </div>
                <label className="label">Background color (support while loading image)</label>
                <div className="field has-addons">
                    <div className="control__color control">
                        <input 
                            className="input"
                            type="color" 
                            value={color}
                            onChange={e => setColor(e.target.value)} />
                    </div>
                    <div className="control is-expanded">
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="HEX Color"
                            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                            value={color}
                            onChange={e => setColor(e.target.value)} />
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default BackgroundImage;