import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutPageHtml } from '../Helper';

const layoutArray = [
    { 
        key: 'h-l-m-f', imageUrl: '/image/grid-page-01.png',
        templateColumns: 'lw auto', templateRows: 'hh minmax(160px, auto) auto',
        templateAreasArray: [
            `'header header'`, `'leftbar main'` ,`'footer footer'`
        ]
    },
    {
        key: 'h-m-r-f', imageUrl: '/image/grid-page-02.png',
        templateColumns: 'auto rw', templateRows: 'hh minmax(160px, auto) auto',
        templateAreasArray: [
            `'header header'`, `'main rightbar'` ,`'footer footer'`
        ]
    },
];

function LayoutGridPage(props) {
    // Props ,States
    const { updateOutput } = props;
    const [layout, setLayout] = useState(layoutArray[0]);
    const [headerHeight, setHeaderHeight] = useState(70);
    const [leftbarWidth, setLeftbarWidth] = useState(200);
    const [rightbarWidth, setRightbarWidth] = useState(200);
    const [columnGap, setColumnGap] = useState(20);
    const [rowGap, setRowGap] = useState(20);

    // Effects
    useEffect(() => {
        const { 
            key, templateColumns, templateRows, templateAreasArray
        } = layout;

        const calcTemplateColumns = templateColumns.replace('lw', `${leftbarWidth}px`).replace('rw', `${rightbarWidth}px`);
        const calcTemplateRows = templateRows.replace('hh', `${headerHeight}px`);

        const styleTemplateAreas = templateAreasArray.join(' ');
        const cssTemplateAreas = templateAreasArray.map(area => `    ${area}`).join('\n');

        let cssLeftbar = '', cssRightbar = '';
        if (layout.key.includes('l')) {
            cssLeftbar = '' + 
                `.page-leftbar {\n` +
                `  grid-area: leftbar;\n` + 
                `}\n\n`;
        }
        if (layout.key.includes('r')) {
            cssRightbar = '' + 
                `.page-rightbar {\n` +
                `  grid-area: rightbar;\n` + 
                `}\n\n`;
        }

        const style = {
            layoutType: `grid-page`,
            containerStyle: { 
                display: 'grid',
                gridTemplateColumns: calcTemplateColumns,
                gridTemplateRows: calcTemplateRows,
                gridTemplateAreas: styleTemplateAreas,
                columnGap: `${columnGap}px`,
                rowGap: `${rowGap}px`
            },
            preview: key
        }

        const css = '' +
            `.grid {\n` +
            `  display: grid;\n` +
            `  grid-template-columns: ${calcTemplateColumns};\n` +
            `  grid-template-rows: ${calcTemplateRows};\n` +
            `  grid-template-areas: \n${cssTemplateAreas};\n` +
            `  column-gap: ${columnGap}px;\n` +
            `  row-gap: ${rowGap}px;\n` +
            `}\n\n` + 
            `.page-header {\n` +
            `  grid-area: header;\n` + 
            `}\n\n` + 
            cssLeftbar + 
            cssRightbar + 
            `.page-main {\n` +
            `  grid-area: main;\n` + 
            `}\n\n` + 
            `.page-footer {\n` +
            `  grid-area: footer;\n` + 
            `}\n\n` + 
            `.content {\n` +
            `  color: #242424;\n` + 
            `  background-color: #f25fff;\n` + 
            `  font-weight: 600;\n` + 
            `  text-align: center;\n` + 
            `  box-sizing: border-box;\n` + 
            `  height: 100%;\n` + 
            `  padding: 10px;\n` + 
            `}`;

        updateOutput(style, css, layoutPageHtml(layout));
    }, [
        updateOutput, 
        layout, headerHeight, 
        leftbarWidth, rightbarWidth, 
        columnGap, rowGap
    ]);

    // Elements
    const layoutElements = layoutArray.map((_layout, index) => {
        let classes = 'button is-fullwidth is-image';
        let imageUrl = _layout.imageUrl;
        if (_layout.key === layout.key) {
            classes += ' is-dark is-selected';
        }
        return (
            <div key={_layout.key} className="column is-6">
                <label className="label">Style {index + 1}</label>
                <p>
                    <button
                        className={classes}
                        onClick={_ => setLayout(_layout)}>
                        <img src={imageUrl} />
                    </button>
                </p>
            </div>
        );
    });

    let leftbarElement = null, rightbarElement = null;
    if (layout.key.includes('l')) {
        leftbarElement = (
            <>
                <label className="label">Leftbar width (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="200"
                            max="300"
                            value={leftbarWidth}
                            onChange={e => setLeftbarWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">200</div>
                            <div className="item has-text-grey">300</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (layout.key.includes('r')) {
        rightbarElement = (
            <>
                <label className="label">Rightbar width (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="200"
                            max="300"
                            value={rightbarWidth}
                            onChange={e => setRightbarWidth(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">200</div>
                            <div className="item has-text-grey">300</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <MainSection extraClass="main__section-inputs" title="Grid Page Layout" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Select layout</h5>
                <div className="columns is-mobile is-multiline content">
                    {layoutElements}
                </div>
                <h5 className="title is-5 has-margin-top">Layout sizing</h5>
                <label className="label">Header height (pixels)</label>
                <div className="field">
                    <div className="control__range control">
                        <input
                            type="range"
                            min="50"
                            max="100"
                            value={headerHeight}
                            onChange={e => setHeaderHeight(e.target.value)} />
                        <div className="control__range--text">
                            <div className="item has-text-grey">50</div>
                            <div className="item has-text-grey">100</div>
                        </div>
                    </div>
                </div>
                {leftbarElement}
                {rightbarElement}
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
            </div>
        </MainSection>
    );
}

export default LayoutGridPage;