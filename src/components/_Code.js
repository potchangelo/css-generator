import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './css/code.module.scss';

function Code(props) {
    const { lang, output } = props;

    function copyCode() {
        const el = document.createElement('textarea');
        el.value = output;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    return (
        <div className={styles.container}>
            <div><span className={`${styles.lang} ${lang.toLowerCase()}`}>{lang}</span></div>
            <pre className={styles.output}>
                <code>{output}</code>
            </pre>
            <button
                className={`button is-success is-fullwidth has-text-weight-bold ${styles.copy}`}
                type="button"
                onClick={copyCode} >
                COPY
            </button>
        </div>
    );
}

Code.propTypes = {
    lang: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired,
};

export default Code;