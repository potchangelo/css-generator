import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputRange, PreviewTransform, Seo } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

function PageTransformSkew() {
    // - States
    const [skewX, setSkewX] = useState(0);
    const [skewY, setSkewY] = useState(0);

    // - Outputs
    const outputStyle = { transform: `skew(${skewX}deg, ${skewY}deg)` };
    const outputCss = `transform: skew(${skewX}deg, ${skewY}deg);`;

    return (
        <App>
            <Seo pageTitle="Transform Skew" pageRelativeUrl="/transform-skew" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Transform Skew"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Skew X (degrees)"
                            min={-45}
                            max={45}
                            value={skewX}
                            onValueChange={setSkewX}
                        />
                        <InputRange
                            title="Skew Y (degrees)"
                            min={-45}
                            max={45}
                            value={skewY}
                            onValueChange={setSkewY}
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

export default PageTransformSkew;