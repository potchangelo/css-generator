import React, { useState } from 'react';
import { ArrowUp, Trash2 } from 'react-feather';
import * as styles from './css/section.module.scss';
import {
  Code,
  InputButtonGroup,
  InputColor,
  InputRange,
  InputRangeGradient,
  PreviewBox,
  Seo,
} from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import {
  colorHexToRgba,
  gradientPointSortAsc,
  optionArrayUpper,
} from '../helpers';

const modeOptionArray = optionArrayUpper(['linear', 'radial']);
const linearDegOptionArray = [90, 135, 180, 225, 270, 315, 0, 45].map((deg) => {
  const key = `${deg}`;
  const icon = (
    <ArrowUp
      width={20}
      height={20}
      strokeWidth={3}
      transform={`rotate(${deg})`}
    />
  );
  return { key, title: key, icon };
});
const radialShapeOptionArray = optionArrayUpper(['circle', 'ellipse']);

function PageBackgroundGradient() {
  // - States
  const [pointArray, setPointArray] = useState([
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
    setPointArray((prevArray) =>
      prevArray.map((point, index) => {
        if (index === selectedIndex) point.color = color;
        return point;
      })
    );
  }

  function setPointAlpha(alpha) {
    setPointArray((prevArray) =>
      prevArray.map((point, index) => {
        if (index === selectedIndex) point.alpha = alpha;
        return point;
      })
    );
  }

  function deletePoint() {
    if (pointArray.length <= 2) return;
    const newPointArray = pointArray.filter(
      (_, index) => index !== selectedIndex
    );
    const minIndex = newPointArray.reduce(
      (indexMin, point, index) =>
        point.position < newPointArray[indexMin].position ? index : indexMin,
      0
    );
    setPointArray(newPointArray);
    setSelectedIndex(minIndex);
  }

  // - Outputs
  const pointTextArray = [...pointArray]
    .sort(gradientPointSortAsc)
    .map(
      (point) =>
        `${colorHexToRgba(point.color, point.alpha)} ${point.position}%`
    );

  let colorText = '';
  if (mode === 'radial') {
    colorText = `radial-gradient(${radialShape}, ${pointTextArray.join(', ')})`;
  } else {
    colorText = `linear-gradient(${linearDeg}deg, ${pointTextArray.join(
      ', '
    )})`;
  }

  const outputStyle = { backgroundImage: colorText };
  const outputCode = `background-image: ${colorText};`;

  // - Elements
  const selectedPoint = pointArray.find((_, index) => index === selectedIndex);
  let directionElement = null;
  if (mode === 'radial') {
    directionElement = (
      <InputButtonGroup
        optionArray={radialShapeOptionArray}
        activeKey={radialShape}
        onButtonClick={setRadialShape}
      />
    );
  } else {
    directionElement = (
      <InputButtonGroup
        optionArray={linearDegOptionArray}
        activeKey={linearDeg}
        onButtonClick={setLinearDeg}
      />
    );
  }

  return (
    <App>
      <Seo
        pageTitle="Background Gradient"
        pageRelativeUrl="/background-gradient"
      />
      <Grid>
        <GridItem>
          <Section
            extraClass={styles.inputs}
            title="Background Gradient"
            subTitle="Customizing"
          >
            <h5 className="title is-5">Colors</h5>
            <InputRangeGradient
              colorPointArray={pointArray}
              selectedIndex={selectedIndex}
              draggingIndex={draggingIndex}
              onColorPointChange={setPointArray}
              onSelectedChange={setSelectedIndex}
              onDraggingChange={setDraggingIndex}
            />
            <InputColor
              title="Color"
              value={selectedPoint.color}
              onValueChange={setPointColor}
            />
            <InputRange
              title="Color opacity"
              min={0}
              max={1}
              step={0.01}
              value={selectedPoint.alpha}
              onValueChange={setPointAlpha}
            />
            <button
              className="button is-danger is-outlined is-small"
              disabled={pointArray.length <= 2}
              onClick={deletePoint}
            >
              <span className="icon">
                <Trash2 strokeWidth={1.5} />
              </span>
              <span>Delete color</span>
            </button>
            <h5 className="title is-5 mt-6">Style</h5>
            <InputButtonGroup
              optionArray={modeOptionArray}
              activeKey={mode}
              onButtonClick={setMode}
            />
            {directionElement}
          </Section>
        </GridItem>
        <GridItem>
          <Section
            extraClass={styles.preview}
            title="Preview"
            subTitle="Box mode"
          >
            <PreviewBox outputStyle={outputStyle} />
          </Section>
          <Section
            extraClass={styles.code}
            headerTheme="dark"
            title="Code"
            subTitle="Paste to your file(s)"
          >
            <Code lang="CSS" output={outputCode} />
          </Section>
        </GridItem>
      </Grid>
    </App>
  );
}

export default PageBackgroundGradient;
