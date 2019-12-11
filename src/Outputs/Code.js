import React from 'react';
import './Css/Code.scss';

function Code(props) {
    const {outputCss} = props;

    function copyCode() {
		const el = document.createElement('textarea');
		el.value = outputCss;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

    return (
        <section className="main__section main__section--code">
            <h4 className="title is-4 has-text-white">Code</h4>
            <pre className="code__css">
                <code>{outputCss}</code>
            </pre>
            <button 
                className="code__copy button is-success is-fullwidth has-text-weight-bold" 
                type="button"
                onClick={copyCode} >
                COPY
            </button>
        </section>
    );
}

export default Code;