import React from 'react';
import * as styles from './css/preview.module.scss';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.outputStyle
 */
function _PreviewTransform(props) {
  const { outputStyle } = props;
  return (
    <div className={styles.transform} style={outputStyle}>
      <h2 className="title has-text-white">R</h2>
    </div>
  );
}

export default _PreviewTransform;
