import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputColor, PreviewBox } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [color, setColor] = useState('#1988f7');

    // - Outputs
    const outputStyle = { backgroundColor: `${color}` };
    const outputCode = `background-color: ${color};`;

    return (
        <App>
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Background Color"
                        subTitle="Customizing"
                    >
                        <InputColor
                            title="Color"
                            value={color}
                            onValueChange={setColor}
                        />
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Box mode"
                    >
                        <PreviewBox outputStyle={outputStyle} />
                    </Section>
                    <Section
                        extraClass={styles.code}
                        titleTheme="dark"
                        title="Code"
                        subTitle="Paste to your file(s)"
                    >
                        <Code lang="CSS" output={outputCode} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};
