import React, { useState } from 'react';
import { Code, InputRange, InputSelect, PreviewLayoutItems, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { layoutItemsHtml, layoutItemSizeOptions, layoutPreviewOptions, optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const floatOptions = optionsUpper(['left', 'right']);

function PageLayoutFloat() {
  // - States
  const [float, setFloat] = useState('left');
  const [width, setWidth] = useState(50);
  const [hSpace, setHSpace] = useState(20);
  const [vSpace, setVSpace] = useState(20);
  const [preview, setPreview] = useState('equal-height');

  // - Outputs
  const sizeObj = layoutItemSizeOptions.find(_size => _size.value === Number(width));
  const outputContainerStyle = { margin: `0px ${(hSpace / 2) * -1}px` };
  const outputItemStyle = {
    float,
    width: `${width}%`,
    marginBottom: `${vSpace}px`,
    padding: `0px ${hSpace / 2}px`,
  };
  const outputCss =
    `.floatbox {\n` +
    `  display: block;\n` +
    `  box-sizing: border-box;\n` +
    `  margin: 0px ${(hSpace / 2) * -1}px;\n` +
    `}\n\n` +
    `.floatbox::after {\n` +
    `  clear: both;\n` +
    `  content: '';\n` +
    `  display: block;\n` +
    `}\n\n` +
    `.item {\n` +
    `  float: ${float};\n` +
    `  box-sizing: border-box;\n` +
    `  width: ${width}%;\n` +
    `  margin-bottom: ${vSpace}px;\n` +
    `  padding: 0px ${hSpace / 2}px;\n` +
    `}\n\n` +
    `.item:nth-child(${sizeObj.nthClear}) {\n` +
    `  clear: both;\n` +
    `}\n\n` +
    `.content {\n` +
    `  color: #242424;\n` +
    `  background-color: #3dcf5b;\n` +
    `  font-weight: 600;\n` +
    `  text-align: center;\n` +
    `  box-sizing: border-box;\n` +
    `  height: 100%;\n` +
    `  padding: 10px;\n` +
    `}`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Float Layout (don't use)" subTitle="Customizing">
          <h5 className="title is-5">Item</h5>
          <InputSelect title="Float" options={floatOptions} value={float} onChange={setFloat} />
          <InputSelect title="Width" options={layoutItemSizeOptions} value={width} onChange={setWidth} />
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
            layoutType={`float-${sizeObj.key}`}
            containerStyle={outputContainerStyle}
            itemStyle={outputItemStyle}
            preview={preview}
          />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
          <Code lang="HTML" output={layoutItemsHtml('floatbox')} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageLayoutFloat;

export const Head = () => <Seo pageTitle="Float Layout" pageRelativeUrl="/layout-float" />;
