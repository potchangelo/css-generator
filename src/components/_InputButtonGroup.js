import React from 'react';
import PropTypes from 'prop-types';

function InputButtonGroup(props) {
    const { title, optionArray, activeKey, onButtonClick } = props;

    const buttonElements = optionArray.map(option => {
        const { key, label } = option;
        let classes = 'button';
        if (key === activeKey) classes += ' is-dark is-selected';
        return (
            <button
                key={key}
                className={classes}
                onClick={() => onButtonClick(key)}
            >
                {label}
            </button>
        )
    });

    return (
        <>
            <label className="label">{title}</label>
            <div className="buttons has-addons">
                {buttonElements}
            </div>
        </>
    );
}

InputButtonGroup.propTypes = {
    title: PropTypes.string.isRequired,
    optionArray: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    activeKey: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default InputButtonGroup;