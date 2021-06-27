import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';

function PreviewTransform(props) {
    const { outputStyle } = props;
    return (
        <div className={styles.transform} style={outputStyle}>
            <h2 className="title has-text-white">R</h2>
        </div>
    );
}

PreviewTransform.propTypes = {
    outputStyle: PropTypes.object.isRequired,
};

export default PreviewTransform;