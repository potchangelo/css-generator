import React from 'react';
import * as styles from './css/section.module.scss';

/**
 * @param {object} props
 * @param {string} [props.extraClass]
 * @param {string} [props.headerTheme]
 * @param {string} props.title
 * @param {string} props.subTitle
 */
function _Section(props) {
  const { extraClass, headerTheme, title, subTitle, children } = props;

  let headerClass = styles.header;
  if (headerTheme === 'dark') {
    headerClass += ` ${styles.headerDark}`;
  }

  return (
    <section className={extraClass ?? ''}>
      <div className={headerClass}>
        <h5 className="title is-6">{title}</h5>
        <h6 className="subtitle is-7">{subTitle}</h6>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}

export default _Section;
