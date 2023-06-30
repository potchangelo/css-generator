import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageFilterSaturate() {
  // - States
  const [saturate, setSaturate] = useState(150);

  // - Outputs
  const outputStyle = { filter: `saturate(${saturate}%)` };
  const outputCss = `filter: saturate(${saturate}%);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Filter Saturate" subTitle="Customizing">
          <InputRange title="Saturate (percent)" min={0} max={300} value={saturate} onChange={setSaturate} />
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

export default PageFilterSaturate;

export const Head = () => <Seo pageTitle="Filter Saturate" pageRelativeUrl="/filter-saturate" />;
