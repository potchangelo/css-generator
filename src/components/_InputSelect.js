import React from 'react';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {{ key: string, value: string|number, title: string }[]} props.options
 * @param {string|number} props.value
 * @param {*} props.onChange
 */
function _InputSelect(props) {
  const { title, options, value, onChange } = props;

  let labelElement = null;
  if (!!title) labelElement = <label className="label">{title}</label>;
  const optionElements = options.map(option => (
    <option key={option.key} value={option.value}>
      {option.title}
    </option>
  ));

  return (
    <>
      {labelElement}
      <div className={`field ${styles.field}`}>
        <div className="select is-fullwidth">
          <select
            value={value}
            onChange={event => {
              onChange(event.target.value);
            }}
          >
            {optionElements}
          </select>
        </div>
      </div>
    </>
  );
}

export default _InputSelect;
