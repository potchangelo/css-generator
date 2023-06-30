import React, { useState } from 'react';
import { Code, InputButtonGroup, InputRange, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import * as styles from './css/section.module.scss';

const modeOptions = [
  { key: 'all', title: 'One Value' },
  { key: 'each', title: 'Individual' },
];
const sides = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

function PageBorderRadius() {
  // - States
  const [mode, setMode] = useState('all');
  const [radius, setRadius] = useState(12);
  const [radiusTl, setRadiusTl] = useState(12);
  const [radiusTr, setRadiusTr] = useState(12);
  const [radiusBr, setRadiusBr] = useState(12);
  const [radiusBl, setRadiusBl] = useState(12);

  // - Outputs
  let outputStyle = {},
    outputCss = '';
  if (mode === 'each') {
    outputStyle = {
      borderRadius: `${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px`,
    };
    outputCss = `border-radius: ${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px;`;
  } else {
    outputStyle = { borderRadius: `${radius}px` };
    outputCss = `border-radius: ${radius}px;`;
  }

  // - Elements
  let borderElements;
  if (mode === 'each') {
    borderElements = sides.map(side => {
      let _radius, _setRadius;
      if (side === 'top-left') {
        [_radius, _setRadius] = [radiusTl, setRadiusTl];
      } else if (side === 'top-right') {
        [_radius, _setRadius] = [radiusTr, setRadiusTr];
      } else if (side === 'bottom-right') {
        [_radius, _setRadius] = [radiusBr, setRadiusBr];
      } else {
        [_radius, _setRadius] = [radiusBl, setRadiusBl];
      }
      return (
        <InputRange
          key={side}
          title={`Radius ${side} (pixels)`}
          min={0}
          max={40}
          value={_radius}
          onChange={_setRadius}
        />
      );
    });
  } else {
    borderElements = <InputRange title="Radius (pixels)" min={0} max={40} value={radius} onChange={setRadius} />;
  }

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Border Radius" subTitle="Customizing">
          <InputButtonGroup title="Mode" options={modeOptions} activeKey={mode} onButtonClick={setMode} />
          {borderElements}
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Box mode">
          <PreviewBox outputStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageBorderRadius;

export const Head = () => <Seo pageTitle="Border Radius" pageRelativeUrl="/border-radius" />;
