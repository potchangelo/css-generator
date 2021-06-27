import React from 'react';
import * as styles from './css/grid.module.scss';

const BlockGridItem = (props) => (
    <div className={styles.item}>
        <div className={styles.itemContent}>
            {props.children}
        </div>
    </div>
);

export default BlockGridItem;