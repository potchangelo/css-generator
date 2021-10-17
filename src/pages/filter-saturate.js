import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, PreviewFilter, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

function FilterSaturate() {
    // - States
    const [saturate, setSaturate] = useState(150);

    // - Outputs
    const outputStyle = { filter: `saturate(${saturate}%)` };
    const outputCss = `filter: saturate(${saturate}%);`;

    return (
        <App>
            <SEO pageTitle="Filter Saturate" pageRelativeUrl="/filter-saturate" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Filter Saturate"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Saturate (percent)"
                            min={0}
                            max={300}
                            value={saturate}
                            onValueChange={setSaturate}
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

export default FilterSaturate;