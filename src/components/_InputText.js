import React from 'react';
import PropTypes from 'prop-types';

function InputText(props) {
    const { title, placeholder, value, onValueChange } = props;
    return (
        <>
            <label className="label">{title}</label>
            <div className="field">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={event => onValueChange(event.target.value)}
                    />
                </div>
            </div>
        </>
    );
}

InputText.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
};

export default InputText;