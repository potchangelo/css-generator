import React from 'react';
import * as styles from './css/grid.module.scss';

const _GridItem = props => (
  <div className={styles.item}>
    <div className={styles.itemContent}>{props.children}</div>
  </div>
);

export default _GridItem;
