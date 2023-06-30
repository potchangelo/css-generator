import React, { useState } from 'react';
import { Code, InputRange, PreviewTransform, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageTransformSkew() {
  // - States
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);

  // - Outputs
  const outputStyle = { transform: `skew(${skewX}deg, ${skewY}deg)` };
  const outputCss = `transform: skew(${skewX}deg, ${skewY}deg);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Transform Skew" subTitle="Customizing">
          <InputRange title="Skew X (degrees)" min={-45} max={45} value={skewX} onChange={setSkewX} />
          <InputRange title="Skew Y (degrees)" min={-45} max={45} value={skewY} onChange={setSkewY} />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Transform mode">
          <PreviewTransform outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageTransformSkew;

export const Head = () => <Seo pageTitle="Transform Skew" pageRelativeUrl="/transform-skew" />;
