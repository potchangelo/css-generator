import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';

function _PreviewLayoutPage(props) {
  const { containerStyle, preview } = props;
  return (
    <div
      className={styles.layoutContainer}
      data-type="grid-page"
      style={containerStyle}
    >
      <header className={styles.header}>
        <div className={styles.itemContent}>
          <p>Header</p>
        </div>
      </header>
      <aside
        className={preview.includes('r') ? styles.rightbar : styles.leftbar}
      >
        <div className={styles.itemContent}>
          <p>{preview.includes('r') ? 'Rightbar' : 'Leftbar'}</p>
        </div>
      </aside>
      <main className={styles.main}>
        <div className={styles.itemContent}>
          <p>Main</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.itemContent}>
          <p>Footer</p>
        </div>
      </footer>
    </div>
  );
}

_PreviewLayoutPage.propTypes = {
  containerStyle: PropTypes.object.isRequired,
  preview: PropTypes.string.isRequired,
};

export default _PreviewLayoutPage;
