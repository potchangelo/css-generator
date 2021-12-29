import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/input.module.scss';

function InputColor(props) {
  const { title, value, onValueChange } = props;
  return (
    <>
      <label className="label">{title}</label>
      <div className={`field has-addons ${styles.field}`}>
        <div className={`control ${styles.color}`}>
          <input
            className="input"
            type="color"
            value={value}
            onChange={event => onValueChange(event.target.value)}
          />
        </div>
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="HEX Color"
            pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
            value={value}
            onChange={event => onValueChange(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

InputColor.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default InputColor;
