import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputRange, PreviewFilter } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [invert, setInvert] = useState(100);

    // - Outputs
    const outputStyle = { filter: `invert(${invert}%)` };
    const outputCss = `filter: invert(${invert}%);`;

    return (
        <App>
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Filter Invert"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Invert (percent)"
                            min={0}
                            max={100}
                            value={invert}
                            onValueChange={setInvert}
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
