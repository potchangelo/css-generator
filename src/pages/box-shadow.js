import React, { useState } from 'react';
import { Code, InputColor, InputRange, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { colorHexToRgba } from 'z/utils/colors';
import * as styles from './css/section.module.scss';

function PageBoxShadow() {
  // - States
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(8);
  const [spread, setSpread] = useState(4);
  const [color, setColor] = useState('#000000');
  const [colorAlpha, setColorAlpha] = useState(0.1);

  // - Outputs
  const colorOutput = colorHexToRgba(color, colorAlpha);
  const outputStyle = {
    boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${colorOutput}`,
  };
  const outputCss = `box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${colorOutput};`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Box Shadow" subTitle="Customizing">
          <InputRange title="X (pixels)" min={-10} max={10} value={x} onChange={setX} />
          <InputRange title="Y (pixels)" min={-10} max={10} value={y} onChange={setY} />
          <InputRange title="Blur (pixels)" min={0} max={20} value={blur} onChange={setBlur} />
          <InputRange title="Spread (pixels)" min={0} max={20} value={spread} onChange={setSpread} />
          <InputColor title="Color" value={color} onChange={setColor} />
          <InputRange title="Color opacity" min={0} max={1} step={0.01} value={colorAlpha} onChange={setColorAlpha} />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Box mode">
          <PreviewBox outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageBoxShadow;

export const Head = () => <Seo pageTitle="Box Shadow" pageRelativeUrl="/box-shadow" />;
