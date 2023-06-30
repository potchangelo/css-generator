import React, { useState } from 'react';
import { Code, InputColor, InputRange, PreviewText, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { colorHexToRgba } from 'z/utils/colors';
import * as styles from './css/section.module.scss';

function PageTextShadow() {
  // - States
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const [blur, setBlur] = useState(2);
  const [color, setColor] = useState('#1988f7');
  const [colorAlpha, setColorAlpha] = useState(0.8);

  // - Outputs
  const colorOutput = colorHexToRgba(color, colorAlpha);
  const outputStyle = { textShadow: `${x}px ${y}px ${blur}px ${colorOutput}` };
  const outputCss = `text-shadow: ${x}px ${y}px ${blur}px ${colorOutput};`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Text Shadow" subTitle="Customizing">
          <InputRange title="X (pixels)" min={-10} max={10} value={x} onChange={setX} />
          <InputRange title="Y (pixels)" min={-10} max={10} value={y} onChange={setY} />
          <InputRange title="Blur (pixels)" min={0} max={20} value={blur} onChange={setBlur} />
          <InputColor title="Color" value={color} onChange={setColor} />
          <InputRange title="Color opacity" min={0} max={1} step={0.01} value={colorAlpha} onChange={setColorAlpha} />
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

export default PageTextShadow;

export const Head = () => <Seo pageTitle="Text Shadow" pageRelativeUrl="/text-shadow" />;
