import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { InputColor, PreviewBox } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    // - States
    const [color, setColor] = useState('#1988f7');
    const [outputStyle, setOutputStyle] = useState({
        backgroundColor: `${color}`
    });


    return (
        <App>
            <Grid>
                <GridItem>
                    <Section
                        extraClass={styles.inputs}
                        title="Background Color"
                        subTitle="Customizing"
                    >
                        <InputColor 
                            title="Color" 
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
                </GridItem>
            </Grid>
        </App>
    );
};
