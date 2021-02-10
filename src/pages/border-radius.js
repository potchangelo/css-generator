import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputButtonGroup, InputRange, PreviewBox } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

const modeOptionArray = [
    { key: 'all', title: 'One Value' },
    { key: 'each', title: 'Individual' }
];
const sideArray = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];

export default () => {
    // - States
    const [mode, setMode] = useState('all');
    const [radius, setRadius] = useState(12);
    const [radiusTl, setRadiusTl] = useState(12);
    const [radiusTr, setRadiusTr] = useState(12);
    const [radiusBr, setRadiusBr] = useState(12);
    const [radiusBl, setRadiusBl] = useState(12);

    // - Outputs
    let outputStyle = {}, outputCss = '';
    if (mode === 'each') {
        outputStyle = { borderRadius: `${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px` };
        outputCss = `border-radius: ${radiusTl}px ${radiusTr}px ${radiusBr}px ${radiusBl}px;`;
    }
    else {
        outputStyle = { borderRadius: `${radius}px` };
        outputCss = `border-radius: ${radius}px;`;
    }

    // - Elements
    let borderElements;
    if (mode === 'each') {
        borderElements = sideArray.map(side => {
            let _radius, _setRadius;
            if (side === 'top-left') {
                [_radius, _setRadius] = [radiusTl, setRadiusTl];
            }
            else if (side === 'top-right') {
                [_radius, _setRadius] = [radiusTr, setRadiusTr];
            }
            else if (side === 'bottom-right') {
                [_radius, _setRadius] = [radiusBr, setRadiusBr];
            }
            else {
                [_radius, _setRadius] = [radiusBl, setRadiusBl];
            }
            return (
                <InputRange
                    key={side}
                    title={`Radius ${side} (pixels)`}
                    min={0}
                    max={40}
                    value={_radius}
                    onValueChange={_setRadius}
                />
            );
        });
    }
    else {
        borderElements = (
            <InputRange
                title="Radius  (pixels)"
                min={0}
                max={40}
                value={radius}
                onValueChange={setRadius}
            />
        );
    }

    return (
        <App>
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Border Radius"
                        subTitle="Customizing"
                    >
                        <InputButtonGroup
                            title="Mode"
                            optionArray={modeOptionArray}
                            activeKey={mode}
                            onButtonClick={setMode}
                        />
                        {borderElements}
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
                        <Code lang="CSS" output={outputCss} />
                    </Section>
                </GridItem>
            </Grid>
        </App>
    );
};
