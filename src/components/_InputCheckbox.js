import React from 'react';
import { Check } from 'react-feather';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {boolean} props.checked
 * @param {*} props.onChange
 */
function _InputCheckbox(props) {
  const { title, checked, onChange } = props;
  return (
    <label className={`checkbox ${styles.checkbox}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={event => {
          onChange(event.target.checked);
        }}
      />
      <span className={`icon ${styles.checkboxIcon}`}>
        <Check width={14} height={14} strokeWidth={4} />
      </span>
      <span className={styles.checkboxText}>{title}</span>
    </label>
  );
}

export default _InputCheckbox;
