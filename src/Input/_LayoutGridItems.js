import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutItemSizeArray, layoutPreviewArray, layoutItemsHtml } from '../Helper';

const justifyItemsArray = [
    'stretch', 'start', 'end', 'center'
];
const alignItemsArray = [
    'stretch', 'start', 'end', 'center'
];

function LayoutGridItems(props) {
    // Props ,States
    const { updateOutput } = props;
    const [templateColumns, setTemplateColumns] = useState('1fr 1fr');
    const [justifyItems, setJustifyItems] = useState('stretch');
    const [alignItems, setAlignItems] = useState('stretch');
    const [columnGap, setColumnGap] = useState(20);
    const [rowGap, setRowGap] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // Effects
    useEffect(() => {
        const style = {
            layoutType: `grid-items`,
            containerStyle: {
                gridTemplateColumns: templateColumns,
                justifyItems,
                alignItems,
                columnGap: `${columnGap}px`,
                rowGap: `${rowGap}px`
            },
            preview
        }

        const css = '' +
            `.grid {\n` +
            `  display: grid;\n` +
            `  grid-template-columns: ${templateColumns};\n` +
            `  justify-items: ${justifyItems};\n` +
            `  align-items: ${alignItems};\n` +
            `  column-gap: ${columnGap}px;\n` +
            `  row-gap: ${rowGap}px;\n` +
            `}\n\n` +
            `.content {\n` +
            `  color: #242424;\n` +
            `  background-color: #4ea2f5;\n` +
            `  font-weight: 600;\n` +
            `  text-align: center;\n` +
            `  box-sizing: border-box;\n` +
            `  height: 100%;\n` +
            `  padding: 10px;\n` +
            `}`;

        updateOutput(style, css, layoutItemsHtml('grid'));
    }, [
        updateOutput, templateColumns, justifyItems, alignItems,
        columnGap, rowGap, preview
    ]);

    // Elements
    const templateColumnElements = layoutItemSizeArray.map(_itemSize => {
        const { key, title, value } = _itemSize;
        const colCount = Math.floor(100 / value);
        const colValue = Array(colCount).fill('1fr').join(' ');
        return <option key={key} value={colValue}>{title}</option>;
    });

    const justifyItemsElements = justifyItemsArray.map(_justify =>
        <option key={_justify} value={_justify}>{_justify.charAt(0).toUpperCase() + _justify.slice(1)}</option>
    );

    const alignItemsElements = alignItemsArray.map(_align =>
        <option key={_align} value={_align}>{_align.charAt(0).toUpperCase() + _align.slice(1)}</option>
    );

    const previewElements = layoutPreviewArray.map(_content =>
        <option key={_content} value={_content}>{_content.charAt(0).toUpperCase() + _content.slice(1).replace('-', ' ')}</option>
    );

    return (
        <MainSection extraClass="main__section-inputs" title="Grid Items Layout" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Layout</h5>
                <label className="label">Grid column width</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={templateColumns}
                            onChange={e => setTemplateColumns(e.target.value)} >
                            {templateColumnElements}
                        </select>
                    </div>
                </div>
                <label className="label">Justify items (row axis)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={justifyItems}
                            onChange={e => setJustifyItems(e.target.value)} >
                            {justifyItemsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Align items (column axis)</label>
                <div className="field">
                    <div className="select is-fullwidth">
                        <select
                            value={alignItems}
                            onChange={e => setAlignItems(e.target.value)} >
                            {alignItemsElements}
                        </select>
                    </div>
                </div>
                <label className="label">Column gap (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="40"
                            value={columnGap}
                            onChange={(e) => setColumnGap(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">0</div>
                            <div className="item has-text-grey">40</div>
                        </div>
                    </div>
                </div>
                <label className="label">Row gap (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="0"
                            max="40"
                            value={rowGap}
                            onChange={(e) => setRowGap(e.target.value)} />
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

export default LayoutGridItems;