import React, { useState } from 'react';
import { Code, InputColor, InputRange, InputSelect, PreviewText, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const textAlignOptions = optionsUpper(['left', 'center', 'right', 'justify']);
const textDecorationOptions = optionsUpper(['none', 'underline', 'overline', 'line-through'], '-');
const textTransformOptions = optionsUpper(['none', 'capitalize', 'uppercase', 'lowercase']);

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
    textTransform,
  };
  const outputCss =
    `color: ${color};\n` +
    `line-height: ${lineHeight}\n` +
    `letter-spacing: ${letterSpacing}px\n` +
    `word-spacing: ${wordSpacing}px\n` +
    `text-align: ${textAlign}\n` +
    `text-decoration: ${textDecoration}\n` +
    `text-transform: ${textTransform}`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Text" subTitle="Customizing">
          <InputColor title="Color" value={color} onChange={setColor} />
          <InputRange title="Line height" min={1} max={2} step={0.05} value={lineHeight} onChange={setLineHeight} />
          <InputRange
            title="Letter spacing (pixels)"
            min={0}
            max={10}
            value={letterSpacing}
            onChange={setLetterSpacing}
          />
          <InputRange title="Word spacing (pixels)" min={0} max={10} value={wordSpacing} onChange={setWordSpacing} />
          <InputSelect title="Text align" options={textAlignOptions} value={textAlign} onChange={setTextAlign} />
          <InputSelect
            title="Text decoration"
            options={textDecorationOptions}
            value={textDecoration}
            onChange={setTextDecoration}
          />
          <InputSelect
            title="Text transform"
            options={textTransformOptions}
            value={textTransform}
            onChange={setTextTransform}
          />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Text mode">
          <PreviewText outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageText;

export const Head = () => <Seo pageTitle="Text" pageRelativeUrl="/text" />;
