import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageFilterInvert() {
  // - States
  const [invert, setInvert] = useState(100);

  // - Outputs
  const outputStyle = { filter: `invert(${invert}%)` };
  const outputCss = `filter: invert(${invert}%);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Filter Invert" subTitle="Customizing">
          <InputRange title="Invert (percent)" min={0} max={100} value={invert} onChange={setInvert} />
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

export default PageFilterInvert;

export const Head = () => <Seo pageTitle="Filter Invert" pageRelativeUrl="/filter-invert" />;
