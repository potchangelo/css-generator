import React, { useState } from 'react';
import { Code, InputRange, InputSelect, PreviewLayoutItems, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { layoutItemsHtml, layoutItemSizeOptions, layoutPreviewOptions, optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const alignOptions = optionsUpper(['stretch', 'start', 'end', 'center']);

function PageLayoutGridItems() {
  // - States
  const [width, setWidth] = useState(50);
  const [justifyItems, setJustifyItems] = useState('stretch');
  const [alignItems, setAlignItems] = useState('stretch');
  const [columnGap, setColumnGap] = useState(20);
  const [rowGap, setRowGap] = useState(20);
  const [preview, setPreview] = useState('equal-height');

  // - Outputs
  const sizeObj = layoutItemSizeOptions.find(_size => _size.value === Number(width));
  const { templateColumns } = sizeObj;
  const outputContainerStyle = {
    gridTemplateColumns: templateColumns,
    justifyItems,
    alignItems,
    columnGap: `${columnGap}px`,
    rowGap: `${rowGap}px`,
  };
  const outputCss =
    `.grid {\n` +
    `  display: grid;\n` +
    `  grid-template-columns: ${templateColumns};\n` +
    `  justify-items: ${justifyItems};\n` +
    `  align-items: ${alignItems};\n` +
    `  column-gap: ${columnGap}px;\n` +
    `  row-gap: ${rowGap}px;\n` +
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

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Grid Items Layout" subTitle="Customizing">
          <h5 className="title is-5">Layout</h5>
          <InputSelect title="Grid column width" options={layoutItemSizeOptions} value={width} onChange={setWidth} />
          <InputSelect
            title="Justify items (row axis)"
            options={alignOptions}
            value={justifyItems}
            onChange={setJustifyItems}
          />
          <InputSelect
            title="Align items (column axis)"
            options={alignOptions}
            value={alignItems}
            onChange={setAlignItems}
          />
          <InputRange title="Column gap (pixels)" min={0} max={40} value={columnGap} onChange={setColumnGap} />
          <InputRange title="Row gap (pixels)" min={0} max={40} value={rowGap} onChange={setRowGap} />
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
          <PreviewLayoutItems layoutType="grid-items" containerStyle={outputContainerStyle} preview={preview} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
          <Code lang="HTML" output={layoutItemsHtml('grid')} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageLayoutGridItems;

export const Head = () => <Seo pageTitle="Grid Items Layout" pageRelativeUrl="/layout-grid-items" />;
