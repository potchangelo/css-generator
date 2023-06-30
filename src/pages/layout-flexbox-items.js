import React, { useState } from 'react';
import { Code, InputButtonGroup, InputRange, InputSelect, PreviewLayoutItems, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { layoutItemsHtml, layoutItemSizeOptions, layoutPreviewOptions, optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const directionOptions = optionsUpper(['row', 'row-reverse'], '-');
const wrapOptions = optionsUpper(['wrap', 'wrap-reverse', 'nowrap'], '-');
const justifyContentOptions = optionsUpper(
  ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
  '-'
);
const alignItemOptions = optionsUpper(['stretch', 'flex-start', 'flex-end', 'center'], '-');
const widthUnitOptions = [
  { key: 'percent', title: 'Percent' },
  { key: 'pixels', title: 'Pixels' },
];

function PageLayoutFlexboxItems() {
  // - States
  const [direction, setDirection] = useState('row');
  const [wrap, setWrap] = useState('wrap');
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [widthUnit, setWidthUnit] = useState('percent');
  const [widthPercent, setWidthPercent] = useState(50);
  const [widthPixels, setWidthPixels] = useState(200);
  const [hSpace, setHSpace] = useState(20);
  const [vSpace, setVSpace] = useState(20);
  const [preview, setPreview] = useState('equal-height');

  // - Outputs
  let widthStr = `${widthPercent}%`;
  if (widthUnit === 'pixels') widthStr = `${widthPixels}px`;
  const outputContainerStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent,
    alignItems,
    margin: `0px ${(hSpace / 2) * -1}px`,
  };
  const outputItemStyle = {
    width: widthStr,
    marginBottom: `${vSpace}px`,
    padding: `0px ${hSpace / 2}px`,
  };
  const outputCss =
    `.flexbox {\n` +
    `  display: flex;\n` +
    `  flex-direction: ${direction};\n` +
    `  flex-wrap: ${wrap};\n` +
    `  justify-content: ${justifyContent};\n` +
    `  align-items: ${alignItems};\n` +
    `  box-sizing: border-box;\n` +
    `  margin: 0px ${(hSpace / 2) * -1}px;\n` +
    `}\n\n` +
    `.item {\n` +
    `  box-sizing: border-box;\n` +
    `  width: ${widthStr};\n` +
    `  margin-bottom: ${vSpace}px;\n` +
    `  padding: 0px ${hSpace / 2}px;\n` +
    `}\n\n` +
    `.content {\n` +
    `  color: #242424;\n` +
    `  background-color: #1bbefe;\n` +
    `  font-weight: 600;\n` +
    `  text-align: center;\n` +
    `  box-sizing: border-box;\n` +
    `  height: 100%;\n` +
    `  padding: 10px;\n` +
    `}`;

  // - Elements
  let widthElement;
  if (widthUnit === 'pixels') {
    widthElement = (
      <InputRange title="Width (pixels)" min={120} max={260} value={widthPixels} onChange={setWidthPixels} />
    );
  } else {
    widthElement = (
      <InputSelect
        title="Width (percent)"
        options={layoutItemSizeOptions}
        value={widthPercent}
        onChange={setWidthPercent}
      />
    );
  }

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Flexbox Items Layout" subTitle="Customizing">
          <h5 className="title is-5">Container</h5>
          <InputSelect title="Direction" options={directionOptions} value={direction} onChange={setDirection} />
          <InputSelect title="Wrap (Multilines)" options={wrapOptions} value={wrap} onChange={setWrap} />
          <InputSelect
            title="Justify content (Main direction)"
            options={justifyContentOptions}
            value={justifyContent}
            onChange={setJustifyContent}
          />
          <InputSelect
            title="Align items (Cross direction)"
            options={alignItemOptions}
            value={alignItems}
            onChange={setAlignItems}
          />
          <h5 className="title is-5 mt-6">Item</h5>
          <InputButtonGroup
            title="Width unit"
            options={widthUnitOptions}
            activeKey={widthUnit}
            onButtonClick={setWidthUnit}
          />
          {widthElement}
          <InputRange title="Horizontal space (pixels)" min={0} max={40} value={hSpace} onChange={setHSpace} />
          <InputRange title="Vertical space (pixels)" min={0} max={40} value={vSpace} onChange={setVSpace} />
          <h5 className="title is-5 mt-6">Content</h5>
          <InputSelect
            title="Preview mode (not change output HTML)"
            options={layoutPreviewOptions}
            value={preview}
            onChange={setPreview}
          />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Layout mode">
          <PreviewLayoutItems
            layoutType="flexbox-items"
            containerStyle={outputContainerStyle}
            itemStyle={outputItemStyle}
            preview={preview}
          />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
          <Code lang="HTML" output={layoutItemsHtml('flexbox')} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageLayoutFlexboxItems;

export const Head = () => <Seo pageTitle="Flexbox Items Layout" pageRelativeUrl="/layout-flexbox-items" />;
