import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/input.module.scss';

function InputRange(props) {
    // - Props
    const { title, min, max, step, hasAddons, value, onValueChange } = props;

    // - Attributes
    let controlClass = 'control';
    if (hasAddons) controlClass += ` ${styles.controlRangeHasAddons}`;

    // - Elements
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
                        onChange={event => onValueChange(Number(event.target.value))}
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

InputRange.propTypes = {
    title: PropTypes.string,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    hasAddons: PropTypes.bool,
    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired
};

InputRange.defaultProps = {
    step: 1,
    hasAddons: false
};

export default InputRange;