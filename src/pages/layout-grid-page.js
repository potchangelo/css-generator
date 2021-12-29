import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import image1 from '../images/button-grid-page-01.png';
import image2 from '../images/button-grid-page-02.png';
import {
  Code,
  InputButtonImageGroup,
  InputRange,
  PreviewLayoutPage,
  Seo,
} from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { layoutPageHtml } from '../helpers';

const layoutOptionArray = [
  {
    key: 'h-l-m-f',
    title: 'Style 1',
    imageSrc: image1,
    templateColumns: 'lw auto',
    templateRows: 'hh minmax(160px, auto) auto',
    templateAreasArray: [
      `'header header'`,
      `'leftbar main'`,
      `'footer footer'`,
    ],
  },
  {
    key: 'h-m-r-f',
    title: 'Style 2',
    imageSrc: image2,
    templateColumns: 'auto rw',
    templateRows: 'hh minmax(160px, auto) auto',
    templateAreasArray: [
      `'header header'`,
      `'main rightbar'`,
      `'footer footer'`,
    ],
  },
];

function PageLayoutGridPage() {
  // - States
  const [layout, setLayout] = useState('h-l-m-f');
  const [headerHeight, setHeaderHeight] = useState(70);
  const [leftbarWidth, setLeftbarWidth] = useState(200);
  const [rightbarWidth, setRightbarWidth] = useState(200);
  const [columnGap, setColumnGap] = useState(20);
  const [rowGap, setRowGap] = useState(20);

  // - Outputs
  const layoutObject = layoutOptionArray.find(
    (_layout) => _layout.key === layout
  );
  const { templateColumns, templateRows, templateAreasArray } = layoutObject;

  const calcTemplateColumns = templateColumns
    .replace('lw', `${leftbarWidth}px`)
    .replace('rw', `${rightbarWidth}px`);
  const calcTemplateRows = templateRows.replace('hh', `${headerHeight}px`);

  const styleTemplateAreas = templateAreasArray.join(' ');
  const cssTemplateAreas = templateAreasArray
    .map((area) => `    ${area}`)
    .join('\n');

  let cssSidebar = '';
  if (layout.includes('r')) {
    cssSidebar =
      '' + `.page-rightbar {\n` + `  grid-area: rightbar;\n` + `}\n\n`;
  } else {
    cssSidebar = '' + `.page-leftbar {\n` + `  grid-area: leftbar;\n` + `}\n\n`;
  }

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: calcTemplateColumns,
    gridTemplateRows: calcTemplateRows,
    gridTemplateAreas: styleTemplateAreas,
    columnGap: `${columnGap}px`,
    rowGap: `${rowGap}px`,
  };
  const outputCss =
    `.grid {\n` +
    `  display: grid;\n` +
    `  grid-template-columns: ${calcTemplateColumns};\n` +
    `  grid-template-rows: ${calcTemplateRows};\n` +
    `  grid-template-areas: \n${cssTemplateAreas};\n` +
    `  column-gap: ${columnGap}px;\n` +
    `  row-gap: ${rowGap}px;\n` +
    `}\n\n` +
    `.page-header {\n` +
    `  grid-area: header;\n` +
    `}\n\n` +
    cssSidebar +
    `.page-main {\n` +
    `  grid-area: main;\n` +
    `}\n\n` +
    `.page-footer {\n` +
    `  grid-area: footer;\n` +
    `}\n\n` +
    `.content {\n` +
    `  color: #242424;\n` +
    `  background-color: #f25fff;\n` +
    `  font-weight: 600;\n` +
    `  text-align: center;\n` +
    `  box-sizing: border-box;\n` +
    `  height: 100%;\n` +
    `  padding: 10px;\n` +
    `}`;

  // - Elements
  let sidebarElement = null;
  if (layout.includes('r')) {
    sidebarElement = (
      <InputRange
        title="Rightbar width (pixels)"
        min={200}
        max={300}
        value={rightbarWidth}
        onValueChange={setRightbarWidth}
      />
    );
  } else {
    sidebarElement = (
      <InputRange
        title="Leftbar width (pixels)"
        min={200}
        max={300}
        value={leftbarWidth}
        onValueChange={setLeftbarWidth}
      />
    );
  }

  return (
    <App>
      <Seo pageTitle="Grid Page Layout" pageRelativeUrl="/layout-grid-page" />
      <Grid>
        <GridItem>
          <Section
            extraClass={styles.inputs}
            title="Grid Page Layout"
            subTitle="Customizing"
          >
            <h5 className="title is-5">Select layout</h5>
            <InputButtonImageGroup
              itemsPerRow={2}
              optionArray={layoutOptionArray}
              activeKey={layout}
              onButtonClick={setLayout}
            />
            <h5 className="title is-5 mt-6">Layout sizing</h5>
            <InputRange
              title="Header height (pixels)"
              min={50}
              max={100}
              value={headerHeight}
              onValueChange={setHeaderHeight}
            />
            {sidebarElement}
            <InputRange
              title="Column gap (pixels)"
              min={0}
              max={40}
              value={columnGap}
              onValueChange={setColumnGap}
            />
            <InputRange
              title="Row gap (pixels)"
              min={0}
              max={40}
              value={rowGap}
              onValueChange={setRowGap}
            />
          </Section>
        </GridItem>
        <GridItem>
          <Section
            extraClass={styles.preview}
            title="Preview"
            subTitle="Layout mode"
          >
            <PreviewLayoutPage
              containerStyle={containerStyle}
              preview={layout}
            />
          </Section>
          <Section
            extraClass={styles.code}
            headerTheme="dark"
            title="Code"
            subTitle="Paste to your file(s)"
          >
            <Code lang="CSS" output={outputCss} />
            <Code lang="HTML" output={layoutPageHtml(layout)} />
          </Section>
        </GridItem>
      </Grid>
    </App>
  );
}

export default PageLayoutGridPage;
