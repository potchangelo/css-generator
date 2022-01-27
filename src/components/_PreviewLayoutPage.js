import React from 'react';
import * as styles from './css/preview.module.scss';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.containerStyle
 * @param {string} props.preview
 */
function _PreviewLayoutPage(props) {
  const { containerStyle, preview } = props;
  return (
    <div className={styles.layoutContainer} data-type="grid-page" style={containerStyle}>
      <header className={styles.header}>
        <div className={styles.itemContent}>
          <p>Header</p>
        </div>
      </header>
      <aside className={preview.includes('r') ? styles.rightbar : styles.leftbar}>
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

export default _PreviewLayoutPage;
