import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { App, Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function FilterBrightness() {
  // - States
  const [brightness, setBrightness] = useState(135);

  // - Outputs
  const outputStyle = { filter: `brightness(${brightness}%)` };
  const outputCss = `filter: brightness(${brightness}%);`;

  return (
    <App>
      <Seo pageTitle="Filter Brightness" pageRelativeUrl="/filter-brightness" />
      <Grid>
        <GridItem>
          <Section extraClass={styles.inputs} title="Filter Brightness" subTitle="Customizing">
            <InputRange
              title="Brightness (percent)"
              min={0}
              max={300}
              value={brightness}
              onValueChange={setBrightness}
            />
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

export default FilterBrightness;
