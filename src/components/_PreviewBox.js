import React from 'react';
import * as styles from './css/preview.module.scss';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.outputStyle
 */
function _PreviewBox(props) {
  const { outputStyle } = props;
  return <div className={styles.box} style={outputStyle} />;
}

export default _PreviewBox;
