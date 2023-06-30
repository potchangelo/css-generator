import React, { useState } from 'react';
import { Code, InputRange, PreviewFilter, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageFilterSepia() {
  // - States
  const [sepia, setSepia] = useState(100);

  // - Outputs
  const outputStyle = { filter: `sepia(${sepia}%)` };
  const outputCss = `filter: sepia(${sepia}%);`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Filter Sepia" subTitle="Customizing">
          <InputRange title="Sepia (percent)" min={0} max={100} value={sepia} onChange={setSepia} />
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

export default PageFilterSepia;

export const Head = () => <Seo pageTitle="Filter Sepia" pageRelativeUrl="/filter-sepia" />;
