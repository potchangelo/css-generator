import React from 'react';
import * as styles from './css/input.module.scss';

/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {number} props.min
 * @param {number} props.max
 * @param {number} [props.step=1]
 * @param {number} props.value
 * @param {boolean} [props.hasAddons=false]
 * @param {*} props.onChange
 */
function _InputRange(props) {
  const { title, min, max, step = 1, value, hasAddons = false, onChange } = props;

  let controlClass = 'control';
  if (hasAddons) controlClass += ` ${styles.controlRangeHasAddons}`;

  let labelElement = null;
  if (!!title) labelElement = <label className="label">{title}</label>;

  return (
    <>
      {labelElement}
      <div className={`field ${styles.field}`}>
        <div className={controlClass}>
          <input
            className={styles.range}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={event => {
              onChange(+event.target.value);
            }}
          />
          <div className={styles.rangeText}>
            <div className={styles.rangeTextItem}>{min}</div>
            <div className={styles.rangeTextItem}>{max}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default _InputRange;
