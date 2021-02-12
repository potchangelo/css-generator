import React from 'react';
import { Check } from 'react-feather';
import PropTypes from 'prop-types';
import styles from './css/input.module.scss';

function InputText(props) {
    const { title, checked, onCheckedChange } = props;
    return (
        <label className={`checkbox ${styles.checkbox}`}>
            <input 
                type="checkbox" 
                checked={checked}
                onChange={e => onCheckedChange(e.target.checked)} />
            <span className={`icon ${styles.checkboxIcon}`}>
                <Check width={18} height={18} strokeWidth={4} />
            </span>
            <span className={styles.checkboxText}>{title}</span>
        </label>
    );
}

InputText.propTypes = {
    title: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
    onCheckedChange: PropTypes.func.isRequired
};

export default InputText;