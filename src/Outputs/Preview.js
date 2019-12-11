import React from 'react';
import './Css/Preview.scss';

function Preview(props) {
    return (
        <section className="main__section main__section--preview">
            <h4 className="title is-4">Preview</h4>
            <div className="preview" style={props.outputStyle}></div>
        </section>
    );
}

export default Preview;