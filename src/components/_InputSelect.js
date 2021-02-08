import React from 'react';
import PropTypes from 'prop-types';

function InputSelect(props) {
    const { title, optionArray, value, onValueChange } = props;

    const optionElements = optionArray.map(option => 
		<option key={option.key} value={option.value}>{option.label}</option>
    );

    return (
        <>
            <label className="label">{title}</label>
            <div className="field">
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
    title: PropTypes.string.isRequired,
    optionArray: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        label: PropTypes.string.isRequired
    })).isRequired,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default InputSelect;