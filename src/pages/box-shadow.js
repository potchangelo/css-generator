import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputColor, InputRange, PreviewBox, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { colorHexToRgba } from '../helpers';

export default () => {
    // - States
    const [x, setX] = useState(2);
    const [y, setY] = useState(2);
    const [blur, setBlur] = useState(8);
    const [spread, setSpread] = useState(4);
    const [color, setColor] = useState('#000000');
    const [colorAlpha, setColorAlpha] = useState(0.1);

    // - Outputs
    const colorOutput = colorHexToRgba(color, colorAlpha);
    const outputStyle = { boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${colorOutput}` };
    const outputCss = `box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${colorOutput};`;

    return (
        <App>
            <SEO pageTitle="Box Shadow" pageRelativeUrl="/box-shadow" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Box Shadow"
                        subTitle="Customizing"
                    >
                        <InputRange
                            title="X (pixels)"
                            min={-10}
                            max={10}
                            value={x}
                            onValueChange={setX}
                        />
                        <InputRange
                            title="Y (pixels)"
                            min={-10}
                            max={10}
                            value={y}
                            onValueChange={setY}
                        />
                        <InputRange
                            title="Blur (pixels)"
                            min={0}
                            max={20}
                            value={blur}
                            onValueChange={setBlur}
                        />
                        <InputRange
                            title="Spread (pixels)"
                            min={0}
                            max={20}
                            value={spread}
                            onValueChange={setSpread}
                        />
                        <InputColor
                            title="Color"
                            value={color}
                            onValueChange={setColor}
                        />
                        <InputRange
                            title="Color opacity"
                            min={0}
                            max={1}
                            step={0.01}
                            value={colorAlpha}
                            onValueChange={setColorAlpha}
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
