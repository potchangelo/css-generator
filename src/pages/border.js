import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { Code, InputButtonGroup, InputColor, InputRange, InputSelect, PreviewBox } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';
import { optionArrayUpper } from '../helpers';

const modeOptionArray = [
    { key: 'all', title: 'One Value' },
    { key: 'each', title: 'Individual' }
];
const styleOptionArray = optionArrayUpper([
    'solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'
]);
const sideArray = ['top', 'right', 'bottom', 'left'];

export default () => {
    // - States
    const [mode, setMode] = useState('all');
    const [color, setColor] = useState('#000000');
    const [styleAll, setStyleAll] = useState('solid');
    const [width, setWidth] = useState(1);

    const [colorT, setColorT] = useState('#000000');
    const [styleT, setStyleT] = useState('solid');
    const [widthT, setWidthT] = useState(1);

    const [colorR, setColorR] = useState('#000000');
    const [styleR, setStyleR] = useState('solid');
    const [widthR, setWidthR] = useState(1);

    const [colorB, setColorB] = useState('#000000');
    const [styleB, setStyleB] = useState('solid');
    const [widthB, setWidthB] = useState(1);

    const [colorL, setColorL] = useState('#000000');
    const [styleL, setStyleL] = useState('solid');
    const [widthL, setWidthL] = useState(1);

    // - Outputs
    let outputStyle = {}, outputCss = '';
    if (mode === 'each') {
        if (widthT > 0) {
            outputStyle.borderTop = `${widthT}px ${styleT} ${colorT}`;
            outputCss += `border-top: ${widthT}px ${styleT} ${colorT};\n`;
        }
        if (widthR > 0) {
            outputStyle.borderRight = `${widthR}px ${styleR} ${colorR}`;
            outputCss += `border-right: ${widthR}px ${styleR} ${colorR};\n`;
        }
        if (widthB > 0) {
            outputStyle.borderBottom = `${widthB}px ${styleB} ${colorB}`;
            outputCss += `border-bottom: ${widthB}px ${styleB} ${colorB};\n`;
        }
        if (widthL > 0) {
            outputStyle.borderLeft = `${widthL}px ${styleL} ${colorL}`;
            outputCss += `border-left: ${widthL}px ${styleL} ${colorL};`;
        }
    }
    else {
        outputStyle = { border: `${width}px ${styleAll} ${color}` };
        outputCss = `border: ${width}px ${styleAll} ${color};`;
    }

    // - Elements
    let borderElements;
    if (mode === 'each') {
        borderElements = sideArray.map(side => {
            let _color, _style, _width, _setColor, _setStyle, _setWidth;
            if (side === 'top') {
                [_color, _style, _width] = [colorT, styleT, widthT];
                [_setColor, _setStyle, _setWidth] = [setColorT, setStyleT, setWidthT];
            }
            else if (side === 'right') {
                [_color, _style, _width] = [colorR, styleR, widthR];
                [_setColor, _setStyle, _setWidth] = [setColorR, setStyleR, setWidthR];
            }
            else if (side === 'bottom') {
                [_color, _style, _width] = [colorB, styleB, widthB];
                [_setColor, _setStyle, _setWidth] = [setColorB, setStyleB, setWidthB];
            }
            else {
                [_color, _style, _width] = [colorL, styleL, widthL];
                [_setColor, _setStyle, _setWidth] = [setColorL, setStyleL, setWidthL];
            }
            return (
                <React.Fragment key={side}>
                    <h4 className="title is-5 mt-6">Border {side}</h4>
                    <InputColor
                        title="Color"
                        value={_color}
                        onValueChange={_setColor}
                    />
                    <InputSelect
                        title="Style"
                        optionArray={styleOptionArray}
                        value={_style}
                        onValueChange={_setStyle}
                    />
                    <InputRange
                        title="Width (pixels)"
                        min={0}
                        max={20}
                        value={_width}
                        onValueChange={_setWidth}
                    />
                </React.Fragment>
            );
        });
    }
    else {
        borderElements = (
            <>
                <InputColor
                    title="Color"
                    value={color}
                    onValueChange={setColor}
                />
                <InputSelect
                    title="Style"
                    optionArray={styleOptionArray}
                    value={styleAll}
                    onValueChange={setStyleAll}
                />
                <InputRange
                    title="Width (pixels)"
                    min={0}
                    max={20}
                    value={width}
                    onValueChange={setWidth}
                />
            </>
        );
    }

    return (
        <App>
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Border"
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
