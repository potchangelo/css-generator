import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';

const floatArray = ['left', 'right'];

const sizeArray = [
    { key: 'one-second', title: '1/2 (50%)', value: 50 },
    { key: 'one-third', title: '1/3 (33.33%)', value: 33.33 },
    { key: 'one-fourth', title: '1/4 (25%)', value: 25 },
]

function LayoutFloat(props) {
    // Props ,States
    const { updateOutput } = props;
    const [float, setFloat] = useState('left');
    const [size, setSize] = useState(50);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);

    // Effects
    useEffect(() => {
        const style = {
            layoutType: 'float',
            containerStyle: {
                margin: `${vSpace * -1}px ${hSpace/2 * -1}px 0px`,
            },
            itemStyle: {
                float,
                width: `${size}%`,
                padding: `${vSpace}px ${hSpace/2}px 0px`,
            }
        }

        const css = '' + 
            `.container {\n` + 
            `    box-sizing: border-box;\n` + 
            `    display: block;\n` + 
            `    margin: ${vSpace * -1}px ${hSpace/2 * -1}px 0px;\n` + 
            `}\n\n` + 
            `.container::after {\n` + 
            `    content: '';\n` + 
            `    display: block;\n` + 
            `    clear: both;\n` + 
            `}\n\n` + 
            `.item {\n` + 
            `    box-sizing: border-box;\n` + 
            `    display: block;\n` + 
            `    float: ${float};\n` + 
            `    width: ${size}%;\n` + 
            `    padding: ${vSpace}px ${hSpace/2}px 0px;\n` + 
            `}\n\n` + 
            `.content {\n` + 
            `    color: #242424;\n` + 
            `    background-color: #689fff;\n` + 
            `    font-weight: 600;\n` + 
            `    text-align: center;\n` + 
            `    padding: 10px;\n` + 
            `}`;

        let itemHtml = '';
        const itemCount = 4;
        for (let i = 1; i <= itemCount; i++) {
            itemHtml += '' + 
                `    <div class="item">\n` + 
                `        <div class="content">${String(i).repeat(5)}</div>\n` + 
                `    </div>\n`;
        }
        const html = `<div class="container">\n` + itemHtml + `</div>`;

        updateOutput(style, css, html);
    }, [updateOutput, float, size, hSpace, vSpace]);

    // Elements
    const floatElements = floatArray.map(_float => (
        <option key={_float} value={_float}>{_float.charAt(0).toUpperCase() + _float.slice(1)}</option>
    ));

    const sizeElements = sizeArray.map(({key, title, value}) => 
		<option key={key} value={value}>{title}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
                <label className="label">Float side</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={float} 
                            onChange={e => setFloat(e.target.value)} >
                            {floatElements}
                        </select>
                    </div>
                </div>
                <label className="label">Item size</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={size} 
                            onChange={e => setSize(e.target.value)} >
                            {sizeElements}
                        </select>
                    </div>
                </div>
                <label className="label">Item horizontal space (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="40"
                            value={hSpace}
                            onChange={(e) => setHSpace(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
                <label className="label">Item vertical space (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="0"
                            max="40"
                            value={vSpace}
                            onChange={(e) => setVSpace(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default LayoutFloat;