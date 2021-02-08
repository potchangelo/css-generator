import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './css/preview.module.scss';

function PreviewBox(props) {
    const { outputStyle } = props;
    return <div className={styles.box} style={outputStyle} />;
}

PreviewBox.propTypes = {
    outputStyle: PropTypes.object.isRequired,
};

export default PreviewBox;