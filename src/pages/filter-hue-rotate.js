import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageFilterHueRotate() {
  // - States
  const [hueRotate, setHueRotate] = useState(180);

  // - Outputs
  const outputStyle = { filter: `hue-rotate(${hueRotate}deg)` };
  const outputCss = `filter: hue-rotate(${hueRotate}deg);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Filter Hue-Rotate" subTitle="Customizing">
          <InputRange title="Hue-Rotate (degrees)" min={0} max={360} value={hueRotate} onChange={setHueRotate} />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Filter mode">
          <PreviewFilter outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageFilterHueRotate;

export const Head = () => <Seo pageTitle="Filter Hue-Rotate" pageRelativeUrl="/filter-hue-rotate" />;
