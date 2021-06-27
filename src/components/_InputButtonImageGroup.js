import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/input.module.scss';

function InputButtonImageGroup(props) {
    // - Props
    const { itemsPerRow, optionArray, activeKey, onButtonClick } = props;

    // - Attributes
    let columnClass = 'column';
    if (itemsPerRow === 2) columnClass += ' is-6';
    else columnClass += ' is-12';

    // - Elements
    const buttonElements = optionArray.map(option => {
        const { key, title, imageSrc } = option;
        let buttonClass = `button ${styles.buttonImage}`;
        if (key === activeKey) buttonClass += ' is-dark is-selected';
        return (
            <div key={key} className={columnClass}>
                <label className="label">{title}</label>
                <p>
                    <button
                        className={buttonClass}
                        onClick={() => onButtonClick(key)}>
                        <img src={imageSrc} alt={key} />
                    </button>
                </p>
            </div>
        )
    });

    return (
        <div className="columns is-mobile is-multiline content">
            {buttonElements}
        </div>
    );
}

InputButtonImageGroup.propTypes = {
    itemsPerRow: PropTypes.number,
    optionArray: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.any.isRequired
    })).isRequired,
    activeKey: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

InputButtonImageGroup.defaultProps = {
    itemsPerRow: 1
};

export default InputButtonImageGroup;