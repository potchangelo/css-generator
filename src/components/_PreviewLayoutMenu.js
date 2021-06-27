import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';

function PreviewLayoutMenu(props) {
    const { containerStyle } = props;
    return (
        <div className={styles.layoutContainer} data-type="flexbox-menu" style={containerStyle}>
            <div>
                <a className={styles.menuTitle}>Site Title</a>
            </div>
            <div>
                <a>Link 1</a>
                <a>Link 2</a>
            </div>
        </div>
    )
}

PreviewLayoutMenu.propTypes = {
    containerStyle: PropTypes.object.isRequired
};

export default PreviewLayoutMenu;