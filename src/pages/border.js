import React, { useState } from 'react';
import { Code, InputButtonGroup, InputColor, InputRange, InputSelect, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const modeOptions = [
  { key: 'all', title: 'One Value' },
  { key: 'each', title: 'Individual' },
];
const styleOptions = optionsUpper(['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset']);
const sides = ['top', 'right', 'bottom', 'left'];

function PageBorder() {
  // - States
  const [mode, setMode] = useState('all');
  const [color, setColor] = useState('#000000');
  const [styleAll, setStyleAll] = useState('solid');
  const [width, setWidth] = useState(1);

  const [colorT, setColorT] = useState('#000000');
  const [styleT, setStyleT] = useState('solid');
  const [widthT, setWidthT] = useState(1);

  const [colorR, setColorR] = useState('#000000');
  const [styleR, setStyleR] = useState('solid');
  const [widthR, setWidthR] = useState(1);

  const [colorB, setColorB] = useState('#000000');
  const [styleB, setStyleB] = useState('solid');
  const [widthB, setWidthB] = useState(1);

  const [colorL, setColorL] = useState('#000000');
  const [styleL, setStyleL] = useState('solid');
  const [widthL, setWidthL] = useState(1);

  // - Outputs
  let outputStyle = {},
    outputCss = '';
  if (mode === 'each') {
    if (widthT > 0) {
      outputStyle.borderTop = `${widthT}px ${styleT} ${colorT}`;
      outputCss += `border-top: ${widthT}px ${styleT} ${colorT};\n`;
    }
    if (widthR > 0) {
      outputStyle.borderRight = `${widthR}px ${styleR} ${colorR}`;
      outputCss += `border-right: ${widthR}px ${styleR} ${colorR};\n`;
    }
    if (widthB > 0) {
      outputStyle.borderBottom = `${widthB}px ${styleB} ${colorB}`;
      outputCss += `border-bottom: ${widthB}px ${styleB} ${colorB};\n`;
    }
    if (widthL > 0) {
      outputStyle.borderLeft = `${widthL}px ${styleL} ${colorL}`;
      outputCss += `border-left: ${widthL}px ${styleL} ${colorL};`;
    }
  } else {
    outputStyle = { border: `${width}px ${styleAll} ${color}` };
    outputCss = `border: ${width}px ${styleAll} ${color};`;
  }

  // - Elements
  let borderElements;
  if (mode === 'each') {
    borderElements = sides.map(side => {
      let _color, _style, _width, _setColor, _setStyle, _setWidth;
      if (side === 'top') {
        [_color, _style, _width] = [colorT, styleT, widthT];
        [_setColor, _setStyle, _setWidth] = [setColorT, setStyleT, setWidthT];
      } else if (side === 'right') {
        [_color, _style, _width] = [colorR, styleR, widthR];
        [_setColor, _setStyle, _setWidth] = [setColorR, setStyleR, setWidthR];
      } else if (side === 'bottom') {
        [_color, _style, _width] = [colorB, styleB, widthB];
        [_setColor, _setStyle, _setWidth] = [setColorB, setStyleB, setWidthB];
      } else {
        [_color, _style, _width] = [colorL, styleL, widthL];
        [_setColor, _setStyle, _setWidth] = [setColorL, setStyleL, setWidthL];
      }
      return (
        <React.Fragment key={side}>
          <h4 className="title is-5 mt-6">Border {side}</h4>
          <InputColor title="Color" value={_color} onChange={_setColor} />
          <InputSelect title="Style" options={styleOptions} value={_style} onChange={_setStyle} />
          <InputRange title="Width (pixels)" min={0} max={20} value={_width} onChange={_setWidth} />
        </React.Fragment>
      );
    });
  } else {
    borderElements = (
      <>
        <InputColor title="Color" value={color} onChange={setColor} />
        <InputSelect title="Style" options={styleOptions} value={styleAll} onChange={setStyleAll} />
        <InputRange title="Width (pixels)" min={0} max={20} value={width} onChange={setWidth} />
      </>
    );
  }

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Border" subTitle="Customizing">
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

export default PageBorder;

export const Head = () => <Seo pageTitle="Border" pageRelativeUrl="/border" />;
