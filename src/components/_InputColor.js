import React from 'react';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {*} props.onChange
 */
function _InputColor(props) {
  const { title, value, onChange } = props;
  return (
    <>
      <label className="label">{title}</label>
      <div className={`field has-addons ${styles.field}`}>
        <div className={`control ${styles.color}`}>
          <input
            className="input"
            type="color"
            value={value}
            onChange={event => {
              onChange(event.target.value);
            }}
          />
        </div>
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="HEX Color"
            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
            value={value}
            onChange={event => {
              onChange(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default _InputColor;
