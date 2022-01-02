import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { App, Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function FilterBlur() {
  // - States
  const [blur, setBlur] = useState(4);

  // - Outputs
  const outputStyle = { filter: `blur(${blur}px)` };
  const outputCss = `filter: blur(${blur}px);`;

  return (
    <App>
      <Seo pageTitle="Filter Blur" pageRelativeUrl="/filter-blur" />
      <Grid>
        <GridItem>
          <Section extraClass={styles.inputs} title="Filter Blur" subTitle="Customizing">
            <InputRange title="Blur (pixels)" min={0} max={50} value={blur} onValueChange={setBlur} />
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
    </App>
  );
}

export default FilterBlur;
