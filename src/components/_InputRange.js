import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/input.module.scss';

function InputRange(props) {
    const { title, min, max, value, onValueChange } = props;
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
                        value={value}
                        onChange={event => onValueChange(event.target.value)} 
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
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default InputRange;