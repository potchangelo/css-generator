import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputCheckbox, InputRange, PreviewLayoutGallery, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { layoutGalleryHtml } from '../helpers';

export default () => {
    // - States
    const [height, setHeight] = useState(180);
    const [isScrollShow, setIsScrollShow] = useState(true);
    const [hSpace, setHSpace] = useState(16);
    const [vSpace, setVSpace] = useState(16);

    // - Outputs
    const scrollHeight = Number(height) + 15;
    const wrapperStyle = { height: `${isScrollShow ? scrollHeight : height}px` };
    const scrollStyle = { height: `${scrollHeight}px` };
    const containerStyle = { height: `${height}px`, padding: `0px ${hSpace / 2}px` };
    const itemStyle = { padding: `${vSpace}px ${hSpace / 2}px` };
    const outputCss = (
        `.gallery-wrapper {\n` +
        `  background-color: #dbdbdb;\n` +
        `  box-sizing: border-box;\n` +
        `  height: ${isScrollShow ? scrollHeight : height}px;\n` +
        `  overflow: hidden;\n` +
        `}\n\n` +
        `.gallery-scroll {\n` +
        `  box-sizing: border-box;\n` +
        `  height: ${scrollHeight}px;\n` +
        `  overflow-x: auto;\n` +
        `  overflow-y: hidden;\n` +
        `}\n\n` +
        `.gallery {\n` +
        `  background-color: #dbdbdb;\n` +
        `  display: flex;\n` +
        `  box-sizing: border-box;\n` +
        `  width: max-content;\n` +
        `  height: ${height}px;\n` +
        `  padding: 0px ${hSpace / 2}px;\n` +
        `}\n\n` +
        `.item {\n` +
        `  box-sizing: border-box;\n` +
        `  height: 100%;\n` +
        `  padding: ${vSpace}px ${hSpace / 2}px;\n` +
        `}\n\n` +
        `.item img {\n` +
        `  display: block;\n` +
        `  height: 100%;\n` +
        `}`
    );
    return (
        <App>
            <SEO pageTitle="Flexbox Gallery Layout" pageRelativeUrl="/layout-flexbox-gallery" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Flexbox Gallery Layout"
                        subTitle="Customizing"
                    >
                        <h5 className="title is-5">Container</h5>
                        <InputRange
                            title="Height (pixels)"
                            min={100}
                            max={240}
                            value={height}
                            onValueChange={setHeight}
                        />
                        <InputCheckbox
                            title="Show scrollbar"
                            checked={isScrollShow}
                            onCheckedChange={setIsScrollShow}
                        />
                        <h5 className="title is-5 mt-6">Item</h5>
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
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Layout mode"
                    >
                        <PreviewLayoutGallery
                            wrapperStyle={wrapperStyle}
                            scrollStyle={scrollStyle}
                            containerStyle={containerStyle}
                            itemStyle={itemStyle}
                        />
                    </Section>
                    <Section
                        extraClass={styles.code}
                        headerTheme="dark"
                        title="Code"
                        subTitle="Paste to your file(s)"
                    >
                        <Code lang="CSS" output={outputCss} />
                        <Code lang="HTML" output={layoutGalleryHtml()} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};
