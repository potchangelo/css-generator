import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';

function _PreviewBox(props) {
  const { outputStyle } = props;
  return <div className={styles.box} style={outputStyle} />;
}

_PreviewBox.propTypes = {
  outputStyle: PropTypes.object.isRequired,
};

export default _PreviewBox;
