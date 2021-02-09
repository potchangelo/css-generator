import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputColor, InputSelect, InputText, PreviewBox } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

const positionValueArray = [
    'left top', 'left center', 'left bottom',
    'center top', 'center', 'center bottom',
    'right top', 'right center', 'right bottom'
];
const positionOptionArray = positionValueArray.map(value => {
    const label = value.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    return { key: `${value}`, value, label };
});

const sizeValueArray = ['auto', 'cover', 'contain'];
const sizeOptionArray = sizeValueArray.map(value => {
    const label = value.charAt(0).toUpperCase() + value.slice(1);
    return { key: `${value}`, value, label }
});

const repeatValueArray = ['no-repeat', 'repeat-x', 'repeat-y', 'repeat', 'space', 'round'];
const repeatOptionArray = repeatValueArray.map(value => {
    const label = value.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');;
    return { key: `${value}`, value, label }
});

export default () => {
    // - States
    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg');
    const [position, setPosition] = useState('center');
    const [size, setSize] = useState('cover');
    const [repeat, setRepeat] = useState('no-repeat');
    const [color, setColor] = useState('#1988f7');

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
                        titleTheme="dark"
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
