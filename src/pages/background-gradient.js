import React, { useState } from 'react';
import { ArrowUp, Trash2 } from 'react-feather';
import { Code, InputButtonGroup, InputColor, InputRange, InputRangeGradient, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { colorHexToRgba, gradientPointSortAsc } from 'z/utils/colors';
import { optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const modeOptions = optionsUpper(['linear', 'radial']);
const linearDegOptions = [90, 135, 180, 225, 270, 315, 0, 45].map(deg => {
  const key = `${deg}`;
  const icon = <ArrowUp width={20} height={20} strokeWidth={3} style={{ transform: `rotate(${deg}deg)` }} />;
  return { key, title: key, icon };
});
const radialShapeOptions = optionsUpper(['circle', 'ellipse']);

function PageBackgroundGradient() {
  // - States
  const [points, setPoints] = useState([
    { color: '#1988f7', alpha: 1, position: 0 },
    { color: '#f71988', alpha: 1, position: 100 },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [draggingIndex, setDraggingIndex] = useState(-1);
  const [mode, setMode] = useState('linear');
  const [linearDeg, setLinearDeg] = useState('90');
  const [radialShape, setRadialShape] = useState('circle');

  // - Functions
  function setPointColor(color) {
    setPoints(prev =>
      prev.map((point, index) => {
        if (index === selectedIndex) point.color = color;
        return point;
      })
    );
  }

  function setPointAlpha(alpha) {
    setPoints(prev =>
      prev.map((point, index) => {
        if (index === selectedIndex) point.alpha = alpha;
        return point;
      })
    );
  }

  function deletePoint() {
    if (points.length <= 2) return;
    const newPoints = points.filter((_, index) => index !== selectedIndex);
    const minIndex = newPoints.reduce((indexMin, point, index) => {
      return point.position < newPoints[indexMin].position ? index : indexMin;
    }, 0);
    setPoints(newPoints);
    setSelectedIndex(minIndex);
  }

  // - Outputs
  const pointTexts = [...points]
    .sort(gradientPointSortAsc)
    .map(point => `${colorHexToRgba(point.color, point.alpha)} ${point.position}%`);

  let colorText = mode === 'radial' ? (
    `radial-gradient(${radialShape}, ${pointTexts.join(', ')})`
  ) : (
    `linear-gradient(${linearDeg}deg, ${pointTexts.join(', ')})`
  );

  const outputStyle = { backgroundImage: colorText };
  const outputCode = `background-image: ${colorText};`;

  // - Elements
  const selectedPoint = points.find((_, index) => index === selectedIndex);
  let directionElement = mode === 'radial' ? (
    <InputButtonGroup options={radialShapeOptions} activeKey={radialShape} onButtonClick={setRadialShape} />
  ) : (
    <InputButtonGroup options={linearDegOptions} activeKey={linearDeg} onButtonClick={setLinearDeg} />
  );

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Background Gradient" subTitle="Customizing">
          <h5 className="title is-5">Colors</h5>
          <InputRangeGradient
            colorPoints={points}
            selectedIndex={selectedIndex}
            draggingIndex={draggingIndex}
            onChange={setPoints}
            onSelectedChange={setSelectedIndex}
            onDraggingChange={setDraggingIndex}
          />
          <InputColor title="Color" value={selectedPoint.color} onChange={setPointColor} />
          <InputRange
            title="Color opacity"
            min={0}
            max={1}
            step={0.01}
            value={selectedPoint.alpha}
            onChange={setPointAlpha}
          />
          <button
            className="button is-danger is-outlined is-small"
            disabled={points.length <= 2}
            onClick={deletePoint}
          >
            <span className="icon">
              <Trash2 strokeWidth={1.5} />
            </span>
            <span>Delete color</span>
          </button>
          <h5 className="title is-5 mt-6">Style</h5>
          <InputButtonGroup options={modeOptions} activeKey={mode} onButtonClick={setMode} />
          {directionElement}
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

export default PageBackgroundGradient;

export const Head = () => <Seo pageTitle="Background Gradient" pageRelativeUrl="/background-gradient" />;
