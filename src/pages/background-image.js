import React, { useState } from 'react';
import { Code, InputColor, InputSelect, InputText, PreviewBox, Seo } from 'z/components';
import { Grid, GridItem, Section } from 'z/layouts';
import { optionsUpper } from 'z/utils/data';
import * as styles from './css/section.module.scss';

const positionOptions = optionsUpper([
  'left top',
  'left center',
  'left bottom',
  'center top',
  'center',
  'center bottom',
  'right top',
  'right center',
  'right bottom',
]);
const sizeOptions = optionsUpper(['auto', 'cover', 'contain']);
const repeatOptions = optionsUpper(['no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'], '-');

function PageBackgroundImage() {
  // - States
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg');
  const [position, setPosition] = useState('center');
  const [size, setSize] = useState('cover');
  const [repeat, setRepeat] = useState('no-repeat');
  const [color, setColor] = useState('#666666');

  // - Outputs
  const outputStyle = {
    backgroundColor: `${color}`,
    backgroundImage: `url('${image}')`,
    backgroundPosition: `${position}`,
    backgroundSize: `${size}`,
    backgroundRepeat: `${repeat}`,
  };
  const outputCode =
    `background-color: ${color};\n` +
    `background-image: url('${image}');\n` +
    `background-position: ${position};\n` +
    `background-size: ${size};\n` +
    `background-repeat: ${repeat};`;

  return (
    <Grid>
      <GridItem>
        <Section extraClass={styles.inputs} title="Background Image" subTitle="Customizing">
          <InputText title="Image URL" placeholder="URL" value={image} onChange={setImage} />
          <InputSelect title="Position" options={positionOptions} value={position} onChange={setPosition} />
          <InputSelect title="Size" options={sizeOptions} value={size} onChange={setSize} />
          <InputSelect title="Repeat" options={repeatOptions} value={repeat} onChange={setRepeat} />
          <InputColor title="Background color (support while loading image)" value={color} onChange={setColor} />
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

export default PageBackgroundImage;

export const Head = () => <Seo pageTitle="Background Image" pageRelativeUrl="/background-image" />;
