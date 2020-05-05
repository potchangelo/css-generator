import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutItemSizeArray, layoutPreviewArray, layoutHtml } from '../Helper';

const floatArray = ['left', 'right'];

function LayoutFloat(props) {
    // Props ,States
    const { updateOutput } = props;
    const [float, setFloat] = useState('left');
    const [width, setWidth] = useState(50);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // Effects
    useEffect(() => {
        const sizeObj = layoutItemSizeArray.find(_size => _size.value == width)

        const style = {
            layoutType: `float-${sizeObj.key}`,
            containerStyle: {
                margin: `0px ${hSpace/2 * -1}px`,
            },
            itemStyle: {
                float,
                width: `${width}%`,
                marginBottom: `${vSpace}px`,
                padding: `0px ${hSpace/2}px`,
            },
            preview
        }

        const css = '' + 
            `.floatbox {\n` + 
            `    display: block;\n` + 
            `    box-sizing: border-box;\n` + 
            `    margin: 0px ${hSpace/2 * -1}px;\n` + 
            `}\n\n` + 
            `.floatbox::after {\n` + 
            `    clear: both;\n` + 
            `    content: '';\n` + 
            `    display: block;\n` + 
            `}\n\n` + 
            `.item {\n` + 
            `    float: ${float};\n` + 
            `    display: block;\n` + 
            `    box-sizing: border-box;\n` + 
            `    width: ${width}%;\n` + 
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

        updateOutput(style, css, layoutHtml('floatbox'));
    }, [updateOutput, float, width, hSpace, vSpace, preview]);

    // Elements
    const floatElements = floatArray.map(_float => 
        <option key={_float} value={_float}>{_float.charAt(0).toUpperCase() + _float.slice(1)}</option>
    );

    const widthElements = layoutItemSizeArray.map(({key, title, value}) => 
		<option key={key} value={value}>{title}</option>
    );

    const previewElements = layoutPreviewArray.map(_content => 
        <option key={_content} value={_content}>{_content.charAt(0).toUpperCase() + _content.slice(1).replace('-', ' ')}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Item</h5>
                <label className="label">Float</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={float} 
                            onChange={e => setFloat(e.target.value)} >
                            {floatElements}
                        </select>
                    </div>
                </div>
                <label className="label">Width</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={width} 
                            onChange={e => setWidth(e.target.value)} >
                            {widthElements}
                        </select>
                    </div>
                </div>
                <label className="label">Horizontal space (pixels)</label>
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
                <label className="label">Vertical space (pixels)</label>
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
                <h5 className="title is-5 has-margin-top">Content</h5>
                <label className="label">Preview mode (not change output HTML)</label>
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