import React from 'react';
import PropTypes from 'prop-types';

function InputButtonGroup(props) {
    // - Props
    const { title, optionArray, activeKey, onButtonClick } = props;

    // - Elements
    const buttonElements = optionArray.map(option => {
        const { key, title } = option;
        let classes = 'button';
        if (key === activeKey) classes += ' is-dark is-selected';
        return (
            <button
                key={key}
                className={classes}
                onClick={() => onButtonClick(key)}
            >
                {title}
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
        title: PropTypes.string.isRequired
    })).isRequired,
    activeKey: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default InputButtonGroup;