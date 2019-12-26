import React from 'react';
import {MainSection} from '../Parents';
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
        <MainSection extraClass="main__section-code" title="CSS Code" subTitle="Paste to your CSS file">
            <pre className="code__css">
                <code>{outputCss}</code>
            </pre>
            <button 
                className="code__copy button is-success is-fullwidth has-text-weight-bold" 
                type="button"
                onClick={copyCode} >
                COPY
            </button>
        </MainSection>
    );
}

export default Code;