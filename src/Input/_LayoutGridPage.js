import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutPageHtml } from '../Helper';

const layoutArray = [
    { 
        key: 'h-l-m-f', imageUrl: '/image/menu-bar-01.png',
        templateColumns: 'lw auto', templateRows: 'hh auto',
        templateAreas: `'header header' 'leftbar main' 'footer footer'`
    },
    {
        key: 'h-m-r-f', imageUrl: '/image/menu-bar-02.png',
        templateColumns: 'auto rw', templateRows: 'hh auto',
        templateAreas: `'header header' 'main rightbar' 'footer footer'` 
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
            key, templateColumns, templateRows, templateAreas
        } = layout;

        const calcTemplateColumns = templateColumns.replace('lw', `${leftbarWidth}px`).replace('rw', `${rightbarWidth}px`);

        const calcTemplateRows = templateRows.replace('hh', `${headerHeight}px`);

        const style = {
            layoutType: `grid-page`,
            containerStyle: { 
                display: 'grid',
                gridTemplateColumns: calcTemplateColumns,
                gridTemplateRows: calcTemplateRows,
                gridTemplateAreas: templateAreas,
                columnGap: `${columnGap}px`,
                rowGap: `${rowGap}px`
            },
            preview: key
        }

        const css = '' +
            `.grid {\n` +
            `  display: grid;\n` +
            `  background-color: #1988f7;\n` +
            `}\n\n`;

        updateOutput(style, css, layoutPageHtml());
    }, [updateOutput, layout, headerHeight]);

    // Elements
    const layoutElements = layoutArray.map((_layout, index) => {
        let classes = 'button is-fullwidth is-image';
        let imageUrl = _layout.imageUrl;
        if (_layout.key === layout.key) {
            classes += ' is-dark is-selected';
        }
        return (
            <React.Fragment key={_layout.key}>
                <label className="label">Style {index + 1}</label>
                <p>
                    <button
                        className={classes}
                        onClick={_ => setLayout(_layout)}>
                        <img src={imageUrl} />
                    </button>
                </p>
            </React.Fragment>
        );
    });

    return (
        <MainSection extraClass="main__section-inputs" title="Grid Page Layout" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Select style</h5>
                <div className="content">
                    {layoutElements}
                </div>
            </div>
        </MainSection>
    );
}

export default LayoutGridPage;