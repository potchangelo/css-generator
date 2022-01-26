import React from 'react';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.placeholder]
 * @param {string} props.value
 * @param {*} props.onChange
 */
function _InputText(props) {
  const { title, placeholder, value, onChange } = props;
  return (
    <>
      <label className="label">{title}</label>
      <div className={`field ${styles.field}`}>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder={placeholder}
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

export default _InputText;
