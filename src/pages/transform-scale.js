import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputRange, PreviewTransform, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);

    // - Outputs
    const outputStyle = { transform: `scale(${scaleX}, ${scaleY})` };
    const outputCss = `transform: scale(${scaleX}, ${scaleY});`;

    return (
        <App>
            <SEO pageTitle="Transform Scale" pageRelativeUrl="/transform-scale" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Transform Scale"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="Scale width (factor)"
                            min={0}
                            max={2.5}
                            step={0.1}
                            value={scaleX}
                            onValueChange={setScaleX}
                        />
                        <InputRange
                            title="Scale height (factor)"
                            min={0}
                            max={2.5}
                            step={0.1}
                            value={scaleY}
                            onValueChange={setScaleY}
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
