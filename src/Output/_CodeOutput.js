import React from 'react';

function CodeOutput(props) {
    const { lang, output } = props

    function copyCode() {
        const el = document.createElement('textarea');
        el.value = output;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    if (!output) return null;

    return (
        <div className="code__output-container">
            <div><span className={`code__lang ${lang.toLowerCase()}`}>{lang}</span></div>
            <pre className="code__output">
                <code>{output}</code>
            </pre>
            <button
                className="code__copy button is-success is-fullwidth has-text-weight-bold"
                type="button"
                onClick={copyCode} >
                COPY
            </button>
        </div>
    );
}

export default CodeOutput;