import React, { useState } from 'react';
import { Code, InputRange, InputSelect, PreviewTransform, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

const unitOptions = [
  { key: 'pixels', value: 'px', title: 'pixels' },
  { key: 'percent', value: '%', title: 'percent' },
];

function PageTransformTranslate() {
  // - States
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [unitX, setUnitX] = useState('px');
  const [unitY, setUnitY] = useState('px');

  // - Outputs
  const outputStyle = {
    transform: `translate(${translateX}${unitX}, ${translateY}${unitY})`,
  };
  const outputCss = `transform: translate(${translateX}${unitX}, ${translateY}${unitY});`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Transform Translate" subTitle="Customizing">
          <p className="label">Translate X</p>
          <div className="columns is-mobile is-gapless">
            <div className="column">
              <InputRange min={-200} max={200} hasAddons={true} value={translateX} onChange={setTranslateX} />
            </div>
            <div className="column is-narrow">
              <InputSelect options={unitOptions} value={unitX} onChange={setUnitX} />
            </div>
          </div>
          <p className="label">Translate Y</p>
          <div className="columns is-mobile is-gapless">
            <div className="column">
              <InputRange min={-200} max={200} hasAddons={true} value={translateY} onChange={setTranslateY} />
            </div>
            <div className="column is-narrow">
              <InputSelect options={unitOptions} value={unitY} onChange={setUnitY} />
            </div>
          </div>
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

export default PageTransformTranslate;

export const Head = () => <Seo pageTitle="Transform Translate" pageRelativeUrl="/transform-translate" />;
