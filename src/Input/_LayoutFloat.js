import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutItemSizeArray, layoutPreviewArray } from '../Helper';

const floatArray = ['left', 'right'];

function LayoutFloat(props) {
    // Props ,States
    const { updateOutput } = props;
    const [float, setFloat] = useState('left');
    const [size, setSize] = useState(50);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // Effects
    useEffect(() => {
        const sizeObj = layoutItemSizeArray.find(_size => _size.value == size)

        const style = {
            layoutType: `float-${sizeObj.key}`,
            containerStyle: {
                margin: `0px ${hSpace/2 * -1}px`,
            },
            itemStyle: {
                float,
                width: `${size}%`,
                marginBottom: `${vSpace}px`,
                padding: `0px ${hSpace/2}px`,
            },
            preview
        }

        const css = '' + 
            `.container {\n` + 
            `    box-sizing: border-box;\n` + 
            `    display: block;\n` + 
            `    margin: 0px ${hSpace/2 * -1}px;\n` + 
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
            `    margin-bottom: ${vSpace}px;\n` + 
            `    padding: 0px ${hSpace/2}px;\n` + 
            `}\n\n` + 
            `.item:nth-child(${sizeObj.nthClear}) {\n` + 
            `    clear: both;\n` + 
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
                `        <div class="content">\n` + 
                `            <p>${String(i).repeat(5)}</p>\n` + 
                `        </div>\n` + 
                `    </div>\n`;
        }
        const html = `<div class="container">\n` + itemHtml + `</div>`;

        updateOutput(style, css, html);
    }, [updateOutput, float, size, hSpace, vSpace, preview]);

    // Elements
    const floatElements = floatArray.map(_float => 
        <option key={_float} value={_float}>{_float.charAt(0).toUpperCase() + _float.slice(1)}</option>
    );

    const sizeElements = layoutItemSizeArray.map(({key, title, value}) => 
		<option key={key} value={value}>{title}</option>
    );

    const previewElements = layoutPreviewArray.map(_content => 
        <option key={_content} value={_content}>{_content.charAt(0).toUpperCase() + _content.slice(1).replace('-', ' ')}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Layout</h5>
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
                <h5 className="title is-5 has-margin-top">Preview</h5>
                <label className="label">Content mode (not change output HTML)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={preview} 
                            onChange={e => setPreview(e.target.value)} >
                            {previewElements}
                        </select>
                    </div>
                </div>
            </div>
        </MainSection>
    );
}

export default LayoutFloat;