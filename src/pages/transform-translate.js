import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputRange, InputSelect, PreviewTransform, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

const unitOptionArray = [
    { key: 'pixels', value: 'px', title: 'pixels' },
    { key: 'percent', value: '%', title: 'percent' }
];

export default () => {
    // - States
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [unitX, setUnitX] = useState('px');
    const [unitY, setUnitY] = useState('px');

    // - Outputs
    const outputStyle = {
        transform: `translate(${translateX}${unitX}, ${translateY}${unitY})`
    };
    const outputCss = (
        `transform: translate(${translateX}${unitX}, ${translateY}${unitY});`
    );

    return (
        <App>
            <SEO pageTitle="Transform Translate" pageRelativeUrl="/transform-translate" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Transform Translate"
                        subTitle="Customizing"
                    >
                        <p className="label">Translate X</p>
                        <div className="columns is-mobile is-gapless">
                            <div className="column">
                                <InputRange
                                    min={-200}
                                    max={200}
                                    hasAddons={true}
                                    value={translateX}
                                    onValueChange={setTranslateX}
                                />
                            </div>
                            <div className="column is-narrow">
                                <InputSelect
                                    optionArray={unitOptionArray}
                                    value={unitX}
                                    onValueChange={setUnitX}
                                />
                            </div>
                        </div>
                        <p className="label">Translate Y</p>
                        <div className="columns is-mobile is-gapless">
                            <div className="column">
                                <InputRange
                                    min={-200}
                                    max={200}
                                    hasAddons={true}
                                    value={translateY}
                                    onValueChange={setTranslateY}
                                />
                            </div>
                            <div className="column is-narrow">
                                <InputSelect
                                    optionArray={unitOptionArray}
                                    value={unitY}
                                    onValueChange={setUnitY}
                                />
                            </div>
                        </div>
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
