import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, PreviewFilter, Seo } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

function FilterGrayscale() {
    // - States
    const [grayscale, setGrayscale] = useState(100);

    // - Outputs
    const outputStyle = { filter: `grayscale(${grayscale}%)` };
    const outputCss = `filter: grayscale(${grayscale}%);`;

    return (
        <App>
            <Seo pageTitle="Filter Grayscale" pageRelativeUrl="/filter-grayscale" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Filter Grayscale"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Grayscale (percent)"
                            min={0}
                            max={100}
                            value={grayscale}
                            onValueChange={setGrayscale}
                        />
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Filter mode"
                    >
                        <PreviewFilter outputStyle={outputStyle} />
                    </Section>
                    <Section
                        extraClass={styles.code}
                        headerTheme="dark"
                        title="Code"
                        subTitle="Paste to your file(s)"
                    >
                        <Code lang="CSS" output={outputCss} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};

export default FilterGrayscale;