import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, PreviewTransform, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

function PageTransformRotate() {
    // - States
    const [rotate, setRotate] = useState(0);

    // - Outputs
    const outputStyle = { transform: `rotate(${rotate}deg)` };
    const outputCss = `transform: rotate(${rotate}deg);`;

    return (
        <App>
            <SEO pageTitle="Transform Rotate" pageRelativeUrl="/transform-rotate" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Transform Rotate"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Rotate (degrees)"
                            min={0}
                            max={360}
                            value={rotate}
                            onValueChange={setRotate}
                        />
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Transform mode"
                    >
                        <PreviewTransform outputStyle={outputStyle} />
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

export default PageTransformRotate;