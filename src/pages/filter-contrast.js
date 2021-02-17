import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputRange, PreviewFilter, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [contrast, setContrast] = useState(150);

    // - Outputs
    const outputStyle = { filter: `contrast(${contrast}%)` };
    const outputCss = `filter: contrast(${contrast}%);`;

    return (
        <App>
            <SEO pageTitle="Filter Contrast" pageRelativeUrl="/filter-contrast" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Filter Contrast"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Contrast (percent)"
                            min={0}
                            max={300}
                            value={contrast}
                            onValueChange={setContrast}
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
