import React from 'react';
import * as styles from './css/code.module.scss';

/**
 * @param {{ lang: string, output: string }} props
 */
function _Code(props) {
  const { lang, output } = props;

  function copyCode() {
    const el = document.createElement('textarea');
    el.value = output;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <div className={styles.container}>
      <div>
        <span className={`${styles.lang} ${lang.toLowerCase()}`}>{lang}</span>
      </div>
      <pre className={styles.output}>
        <code>{output}</code>
      </pre>
      <button
        className={`button is-success is-fullwidth has-text-weight-bold ${styles.copy}`}
        type="button"
        onClick={copyCode}
      >
        COPY
      </button>
    </div>
  );
}

export default _Code;
