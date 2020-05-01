import React from 'react';
import { MainSection } from '../Layout';
import CodeOutput from './_CodeOutput';

function Code(props) {
    const { outputCss, outputHtml } = props;
    return (
        <MainSection extraClass="main__section-code" title="Code" subTitle="Paste to your file(s)">
            <CodeOutput lang="CSS" output={outputCss} />
            <CodeOutput lang="HTML" output={outputHtml} />
        </MainSection>
    );
}

export default Code;