import React, { useState } from 'react';
import { Code, InputButtonImageGroup, PreviewLayoutMenu, Seo } from 'z/components';
import image1 from 'z/images/button-menu-bar-01.png';
import image2 from 'z/images/button-menu-bar-02.png';
import { Grid, GridItem, Section } from 'z/layouts';
import { layoutMenuHtml } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const layoutOptions = [
  { key: 'left', title: 'Style 1', imageSrc: image1 },
  { key: 'right', title: 'Style 2', imageSrc: image2 },
];

function PageLayoutFlexboxMenuBar() {
  // - States
  const [layout, setLayout] = useState('left');

  // - Outputs
  const justifyContent = layout === 'right' ? 'space-between' : 'flex-start';
  const outputStyle = { justifyContent };
  const outputCss =
    `.menu-bar {\n` +
    `  background-color: #1988f7;\n` +
    `  display: flex;\n` +
    `  justify-content: ${justifyContent};\n` +
    `  box-sizing: border-box;\n` +
    `}\n\n` +
    `.item {\n` +
    `  color: white;\n` +
    `  background-color: transparent;\n` +
    `  font-size: 18px;\n` +
    `  display: inline-block;\n` +
    `  box-sizing: border-box;\n` +
    `  padding: 14px 20px;\n` +
    `}\n\n` +
    `.item.title {\n` +
    `  font-weight: 600;\n` +
    `}\n\n` +
    `.item:hover {\n` +
    `  background-color: rgba(0, 0, 0, 0.1);\n` +
    `}`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Flexbox Menu Bar Layout" subTitle="Customizing">
          <h5 className="title is-5">Select layout</h5>
          <InputButtonImageGroup options={layoutOptions} activeKey={layout} onButtonClick={setLayout} />
        </Section>
      </GridItem>
      <GridItem>
        <Section extraClass={styles.preview} title="Preview" subTitle="Layout mode">
          <PreviewLayoutMenu containerStyle={outputStyle} />
        </Section>
        <Section extraClass={styles.code} headerTheme="dark" title="Code" subTitle="Paste to your file(s)">
          <Code lang="CSS" output={outputCss} />
          <Code lang="HTML" output={layoutMenuHtml} />
        </Section>
      </GridItem>
    </Grid>
  );
}

export default PageLayoutFlexboxMenuBar;

export const Head = () => <Seo pageTitle="Flexbox Menu Bar Layout" pageRelativeUrl="/layout-flexbox-menu-bar" />;
