import React, { useState } from 'react';
import styles from './css/section.module.scss';
import { InputColor } from '../components';
import { App, Grid, GridItem, Section } from '../layouts';

export default () => {
    const [color, setColor] = useState('#1988f7');
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
                <GridItem>555</GridItem>
            </Grid>
        </App>
    );
};
