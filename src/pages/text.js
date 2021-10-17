import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputColor, InputRange, InputSelect, PreviewText, Seo } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { optionArrayUpper } from '../helpers';

const textAlignOptionArray = optionArrayUpper([
    'left', 'center', 'right', 'justify'
]);
const textDecorationOptionArray = optionArrayUpper([
    'none', 'underline', 'overline', 'line-through'
], '-');
const textTransformOptionArray = optionArrayUpper([
    'none', 'capitalize', 'uppercase', 'lowercase'
]);

function PageText() {
    // - States
    const [color, setColor] = useState('#333333');
    const [lineHeight, setLineHeight] = useState(1.5);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [wordSpacing, setWordSpacing] = useState(0);
    const [textAlign, setTextAlign] = useState('left');
    const [textDecoration, setTextDecoration] = useState('none');
    const [textTransform, setTextTransform] = useState('none');

    // - Outputs
    const outputStyle = {
        color,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
        wordSpacing: `${wordSpacing}px`,
        textAlign,
        textDecoration,
        textTransform
    };
    const outputCss = (
        `color: ${color};\n` +
        `line-height: ${lineHeight}\n` +
        `letter-spacing: ${letterSpacing}px\n` +
        `word-spacing: ${wordSpacing}px\n` +
        `text-align: ${textAlign}\n` +
        `text-decoration: ${textDecoration}\n` +
        `text-transform: ${textTransform}`
    );

    return (
        <App>
            <Seo pageTitle="Text" pageRelativeUrl="/text" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Text"
                        subTitle="Customizing"
                    >
                        <InputColor
                            title="Color"
                            value={color}
                            onValueChange={setColor}
                        />
                        <InputRange
                            title="Line height"
                            min={1}
                            max={2}
                            step={0.05}
                            value={lineHeight}
                            onValueChange={setLineHeight}
                        />
                        <InputRange
                            title="Letter spacing (pixels)"
                            min={0}
                            max={10}
                            value={letterSpacing}
                            onValueChange={setLetterSpacing}
                        />
                        <InputRange
                            title="Word spacing (pixels)"
                            min={0}
                            max={10}
                            value={wordSpacing}
                            onValueChange={setWordSpacing}
                        />
                        <InputSelect
                            title="Text align"
                            optionArray={textAlignOptionArray}
                            value={textAlign}
                            onValueChange={setTextAlign}
                        />
                        <InputSelect
                            title="Text decoration"
                            optionArray={textDecorationOptionArray}
                            value={textDecoration}
                            onValueChange={setTextDecoration}
                        />
                        <InputSelect
                            title="Text transform"
                            optionArray={textTransformOptionArray}
                            value={textTransform}
                            onValueChange={setTextTransform}
                        />
                    </Section>
                </GridItem>
                <GridItem>
                    <Section
                        extraClass={styles.preview}
                        title="Preview"
                        subTitle="Text mode"
                    >
                        <PreviewText outputStyle={outputStyle} />
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

export default PageText;