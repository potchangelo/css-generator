import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/input.module.scss';

function InputRange(props) {
    const { title, min, max, step, value, onValueChange } = props;
    return (
        <>
            <label className="label">{title}</label>
            <div className="field">
                <div className="control">
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
    title: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired
};

InputRange.defaultProps = {
    step: 1
};

export default InputRange;