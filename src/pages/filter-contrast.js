import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageFilterContrast() {
  // - States
  const [contrast, setContrast] = useState(150);

  // - Outputs
  const outputStyle = { filter: `contrast(${contrast}%)` };
  const outputCss = `filter: contrast(${contrast}%);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Filter Contrast" subTitle="Customizing">
          <InputRange title="Contrast (percent)" min={0} max={300} value={contrast} onChange={setContrast} />
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

export default PageFilterContrast;

export const Head = () => <Seo pageTitle="Filter Contrast" pageRelativeUrl="/filter-contrast" />;
