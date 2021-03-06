import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, InputSelect, PreviewLayoutItems, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { layoutItemsHtml, layoutItemSizeOptionArray, layoutPreviewOptionArray, optionArrayUpper } from '../helpers';

const jaItemsOptionArray = optionArrayUpper([
    'stretch', 'start', 'end', 'center'
]);

export default () => {
    // - States
    const [width, setWidth] = useState(50);
    const [justifyItems, setJustifyItems] = useState('stretch');
    const [alignItems, setAlignItems] = useState('stretch');
    const [columnGap, setColumnGap] = useState(20);
    const [rowGap, setRowGap] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // - Outputs
    const sizeObj = layoutItemSizeOptionArray.find(_size => (
        _size.value === Number(width)
    ));
    const { templateColumns } = sizeObj;
    const outputContainerStyle = {
        gridTemplateColumns: templateColumns,
        justifyItems,
        alignItems,
        columnGap: `${columnGap}px`,
        rowGap: `${rowGap}px`
    };
    const outputCss = (
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
        `  background-color: #f25fff;\n` +
        `  font-weight: 600;\n` +
        `  text-align: center;\n` +
        `  box-sizing: border-box;\n` +
        `  height: 100%;\n` +
        `  padding: 10px;\n` +
        `}`
    );

    return (
        <App>
            <SEO pageTitle="Grid Items Layout" pageRelativeUrl="/layout-grid-items" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Grid Items Layout"
                        subTitle="Customizing"
                    >
                        <h5 className="title is-5">Layout</h5>
                        <InputSelect
                            title="Grid column width"
                            optionArray={layoutItemSizeOptionArray}
                            value={width}
                            onValueChange={setWidth}
                        />
                        <InputSelect
                            title="Justify items (row axis)"
                            optionArray={jaItemsOptionArray}
                            value={justifyItems}
                            onValueChange={setJustifyItems}
                        />
                        <InputSelect
                            title="Align items (column axis)"
                            optionArray={jaItemsOptionArray}
                            value={alignItems}
                            onValueChange={setAlignItems}
                        />
                        <InputRange
                            title="Column gap (pixels)"
                            min={0}
                            max={40}
                            value={columnGap}
                            onValueChange={setColumnGap}
                        />
                        <InputRange
                            title="Row gap (pixels)"
                            min={0}
                            max={40}
                            value={rowGap}
                            onValueChange={setRowGap}
                        />
                        <h5 className="title is-5 mt-6">Content</h5>
                        <InputSelect
                            title="Preview mode (not change output HTML)"
                            optionArray={layoutPreviewOptionArray}
                            value={preview}
                            onValueChange={setPreview}
                        />
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Layout mode"
                    >
                        <PreviewLayoutItems
                            layoutType="grid-items"
                            containerStyle={outputContainerStyle}
                            preview={preview}
                        />
                    </Section>
                    <Section
                        extraClass={styles.code}
                        headerTheme="dark"
                        title="Code"
                        subTitle="Paste to your file(s)"
                    >
                        <Code lang="CSS" output={outputCss} />
                        <Code lang="HTML" output={layoutItemsHtml('grid')} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};
