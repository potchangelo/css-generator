import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, PreviewFilter, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [sepia, setSepia] = useState(100);

    // - Outputs
    const outputStyle = { filter: `sepia(${sepia}%)` };
    const outputCss = `filter: sepia(${sepia}%);`;

    return (
        <App>
            <SEO pageTitle="Filter Sepia" pageRelativeUrl="/filter-sepia" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Filter Sepia"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Sepia (percent)"
                            min={0}
                            max={100}
                            value={sepia}
                            onValueChange={setSepia}
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
