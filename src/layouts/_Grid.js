import React from 'react';
import * as styles from './css/grid.module.scss';

const Grid = props => <div className={styles.main}>{props.children}</div>;

export default Grid;
