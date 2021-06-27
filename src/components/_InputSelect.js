import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/input.module.scss';

function InputSelect(props) {
    // - Props
    const { title, optionArray, value, onValueChange } = props;

    // - Elements
    let labelElement = null;
    if (!!title) labelElement = <label className="label">{title}</label>;
    const optionElements = optionArray.map(option =>
        <option key={option.key} value={option.value}>{option.title}</option>
    );

    return (
        <>
            {labelElement}
            <div className={`field ${styles.field}`}>
                <div className="select is-fullwidth">
                    <select
                        value={value}
                        onChange={event => onValueChange(event.target.value)} >
                        {optionElements}
                    </select>
                </div>
            </div>
        </>
    );
}

InputSelect.propTypes = {
    title: PropTypes.string,
    optionArray: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        title: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default InputSelect;