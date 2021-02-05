import React from 'react';
import styles from './css/preview.module.scss';

function PreviewBox(props) {
    const { outputStyle = {} } = props;
    return <div className={styles.box} style={outputStyle} />;
}

export default PreviewBox;