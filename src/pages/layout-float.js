import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, InputSelect, PreviewLayoutItems, Seo } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { layoutItemsHtml, layoutItemSizeOptionArray, layoutPreviewOptionArray, optionArrayUpper } from '../helpers';

const floatOptionArray = optionArrayUpper(['left', 'right']);

function PageLayoutFloat() {
    // - States
    const [float, setFloat] = useState('left');
    const [width, setWidth] = useState(50);
    const [hSpace, setHSpace] = useState(20);
    const [vSpace, setVSpace] = useState(20);
    const [preview, setPreview] = useState('equal-height');

    // - Outputs
    const sizeObj = layoutItemSizeOptionArray.find(_size => (
        _size.value === Number(width)
    ));
    const outputContainerStyle = { margin: `0px ${hSpace / 2 * -1}px` };
    const outputItemStyle = {
        float,
        width: `${width}%`,
        marginBottom: `${vSpace}px`,
        padding: `0px ${hSpace / 2}px`
    };
    const outputCss = (
        `.floatbox {\n` +
        `  display: block;\n` +
        `  box-sizing: border-box;\n` +
        `  margin: 0px ${hSpace / 2 * -1}px;\n` +
        `}\n\n` +
        `.floatbox::after {\n` +
        `  clear: both;\n` +
        `  content: '';\n` +
        `  display: block;\n` +
        `}\n\n` +
        `.item {\n` +
        `  float: ${float};\n` +
        `  box-sizing: border-box;\n` +
        `  width: ${width}%;\n` +
        `  margin-bottom: ${vSpace}px;\n` +
        `  padding: 0px ${hSpace / 2}px;\n` +
        `}\n\n` +
        `.item:nth-child(${sizeObj.nthClear}) {\n` +
        `  clear: both;\n` +
        `}\n\n` +
        `.content {\n` +
        `  color: #242424;\n` +
        `  background-color: #3dcf5b;\n` +
        `  font-weight: 600;\n` +
        `  text-align: center;\n` +
        `  box-sizing: border-box;\n` +
        `  height: 100%;\n` +
        `  padding: 10px;\n` +
        `}`
    );

    return (
        <App>
            <Seo pageTitle="Float Layout" pageRelativeUrl="/layout-float" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Float Layout (don't use)"
                        subTitle="Customizing"
                    >
                        <h5 className="title is-5">Item</h5>
                        <InputSelect
                            title="Float"
                            optionArray={floatOptionArray}
                            value={float}
                            onValueChange={setFloat}
                        />
                        <InputSelect
                            title="Width"
                            optionArray={layoutItemSizeOptionArray}
                            value={width}
                            onValueChange={setWidth}
                        />
                        <InputRange
                            title="Horizontal space (pixels)"
                            min={0}
                            max={40}
                            value={hSpace}
                            onValueChange={setHSpace}
                        />
                        <InputRange
                            title="Vertical space (pixels)"
                            min={0}
                            max={40}
                            value={vSpace}
                            onValueChange={setVSpace}
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
                            layoutType={`float-${sizeObj.key}`}
                            containerStyle={outputContainerStyle}
                            itemStyle={outputItemStyle}
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
                        <Code lang="HTML" output={layoutItemsHtml('floatbox')} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};

export default PageLayoutFloat;