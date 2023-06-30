import React, { useState } from 'react';
import { Code, InputColor, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

function PageBackgroundColor() {
  // - States
  const [color, setColor] = useState('#1988f7');

  // - Outputs
  const outputStyle = { backgroundColor: `${color}` };
  const outputCode = `background-color: ${color};`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Background Color" subTitle="Customizing">
          <InputColor title="Color" value={color} onChange={setColor} />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Box mode">
          <PreviewBox outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCode} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageBackgroundColor;

export const Head = () => <Seo pageTitle="Background Color" pageRelativeUrl="/background-color" />;
