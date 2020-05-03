import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutPreviewArray } from '../Helper';

const directionArray = ['row', 'row-reverse'];
const wrapArray = ['wrap', 'wrap-reverse', 'nowrap'];
const justifyContentArray = [
    'flex-start', 'flex-end', 'center', 
    'space-between', 'space-around', 'space-evenly'
];
const alignItemsArray = ['stretch', 'flex-start', 'flex-end', 'center'];

function LayoutFlexboxFixed(props) {
    // Props ,States
    const { updateOutput } = props;
    const [direction, setDirection] = useState('row');
    const [wrap, setWrap] = useState('wrap');
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('stretch');
    const [width, setWidth] = useState(200);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // Effects
    useEffect(() => {
        const style = {
            layoutType: `flexbox`,
            containerStyle: {
                flexDirection: direction,
                flexWrap: wrap,
                justifyContent, 
                alignItems,
                margin: `0px ${hSpace/2 * -1}px`,
            },
            itemStyle: {
                width: `${width}px`,
                marginBottom: `${vSpace}px`,
                padding: `0px ${hSpace/2}px`,
            },
            preview
        }

        const css = '' + 
            `.container {\n` + 
            `    display: flex;\n` + 
            `    flex-direction: ${direction};\n` + 
            `    flex-wrap: ${wrap};\n` + 
            `    justify-content: ${justifyContent};\n` + 
            `    align-items: ${alignItems};\n` + 
            `    margin: 0px ${hSpace/2 * -1}px;\n` + 
            `    box-sizing: border-box;\n` + 
            `}\n\n` + 
            `.item {\n` + 
            `    display: block;\n` + 
            `    width: ${width}px;\n` + 
            `    margin-bottom: ${vSpace}px;\n` + 
            `    padding: 0px ${hSpace/2}px;\n` + 
            `    box-sizing: border-box;\n` + 
            `}\n\n` + 
            `.content {\n` + 
            `    color: #242424;\n` + 
            `    background-color: #689fff;\n` + 
            `    font-weight: 600;\n` + 
            `    text-align: center;\n` + 
            `    padding: 10px;\n` + 
            `}`;

        let itemHtml = '';
        for (let i = 1; i <= 4; i++) {
            itemHtml += '' + 
                `    <div class="item">\n` + 
                `        <div class="content">\n` + 
                `            <p>${String(i).repeat(5)}</p>\n` + 
                `        </div>\n` + 
                `    </div>\n`;
        }
        const html = `<div class="container">\n` + itemHtml + `</div>`;

        updateOutput(style, css, html);
    }, [
        updateOutput, direction, wrap, justifyContent, alignItems,
        width, hSpace, vSpace, preview
    ]);

    // Elements
    const directionElements = directionArray.map(_dir => 
        <option key={_dir} value={_dir}>{_dir.charAt(0).toUpperCase() + _dir.slice(1)}</option>
    );

    const wrapElements = wrapArray.map(_wrap => 
        <option key={_wrap} value={_wrap}>{_wrap.charAt(0).toUpperCase() + _wrap.slice(1)}</option>
    );

    const justifyContentElements = justifyContentArray.map(_justify => 
        <option key={_justify} value={_justify}>{_justify.charAt(0).toUpperCase() + _justify.slice(1)}</option>
    );

    const alignItemsElements = alignItemsArray.map(_align => 
        <option key={_align} value={_align}>{_align.charAt(0).toUpperCase() + _align.slice(1)}</option>
    );

    const previewElements = layoutPreviewArray.map(_content => 
        <option key={_content} value={_content}>{_content.charAt(0).toUpperCase() + _content.slice(1).replace('-', ' ')}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Background Color" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Container</h5>
                <label className="label">Direction</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={direction} 
                            onChange={e => setDirection(e.target.value)} >
                            {directionElements}
                        </select>
                    </div>
                </div>
                <label className="label">Wrap (Multilines)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={wrap} 
                            onChange={e => setWrap(e.target.value)} >
                            {wrapElements}
                        </select>
                    </div>
                </div>
                <label className="label">Justify content (Main direction)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={justifyContent} 
                            onChange={e => setJustifyContent(e.target.value)} >
                            {justifyContentElements}
                        </select>
                    </div>
                </div>
                <label className="label">Align items (Cross direction)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={alignItems} 
                            onChange={e => setAlignItems(e.target.value)} >
                            {alignItemsElements}
                        </select>
                    </div>
                </div>
                <h5 className="title is-5 has-margin-top">Item</h5>
                <label className="label">Width (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input 
                            type="range"
                            min="120"
                            max="260"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">120</div>
                            <div className="item has-text-grey">260</div>
                        </div>
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

export default LayoutFlexboxFixed;