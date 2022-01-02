import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';

function _PreviewLayoutMenu(props) {
  const { containerStyle } = props;
  return (
    <div
      className={styles.layoutContainer}
      data-type="flexbox-menu"
      style={containerStyle}
    >
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.menuTitle}>Site Title</a>
      </div>
      <div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Link 1</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Link 2</a>
      </div>
    </div>
  );
}

_PreviewLayoutMenu.propTypes = {
  containerStyle: PropTypes.object.isRequired,
};

export default _PreviewLayoutMenu;
