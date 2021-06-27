import React, { useState } from 'react';
import * as styles from './css/section.module.scss';
import { Code, InputColor, InputSelect, InputText, PreviewBox, SEO } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { optionArrayUpper } from '../helpers';

const positionOptionArray = optionArrayUpper([
    'left top', 'left center', 'left bottom',
    'center top', 'center', 'center bottom',
    'right top', 'right center', 'right bottom'
]);
const sizeOptionArray = optionArrayUpper([
    'auto', 'cover', 'contain'
]);
const repeatOptionArray = optionArrayUpper([
    'no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'
], '-');

export default () => {
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
    const outputCode = (
        `background-color: ${color};\n` +
        `background-image: url('${image}');\n` +
        `background-position: ${position};\n` +
        `background-size: ${size};\n` +
        `background-repeat: ${repeat};`
    );

    return (
        <App>
            <SEO pageTitle="Background Image" pageRelativeUrl="/background-image" />
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Background Image"
                        subTitle="Customizing"
                    >
                        <InputText
                            title="Image URL"
                            placeholder="URL"
                            value={image}
                            onValueChange={setImage}
                        />
                        <InputSelect
                            title="Position"
                            optionArray={positionOptionArray}
                            value={position}
                            onValueChange={setPosition}
                        />
                        <InputSelect
                            title="Size"
                            optionArray={sizeOptionArray}
                            value={size}
                            onValueChange={setSize}
                        />
                        <InputSelect
                            title="Repeat"
                            optionArray={repeatOptionArray}
                            value={repeat}
                            onValueChange={setRepeat}
                        />
                        <InputColor
                            title="Background color (support while loading image)"
                            value={color}
                            onValueChange={setColor}
                        />
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
};
