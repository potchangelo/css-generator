import React from 'react';
import {withRouter} from 'react-router-dom';
import './Css/Preview.scss';

function Preview(props) {
    const {location, outputStyle} = props;

    // Elements
    let previewElement;
    if (location.pathname.startsWith('/text')) {
        previewElement = (
            <p className="preview__text" style={outputStyle}>Praesent eget tempus leo. Curabitur sit amet enim in lorem placerat consequat ac at nunc. Curabitur eget est ultricies, tincidunt augue efficitur, pellentesque nulla. Vivamus non aliquet libero, ut tincidunt diam. Quisque nec nulla ut erat pretium ultricies quis nec dolor. Etiam sed leo lorem. Sed sagittis arcu lacus, eget dapibus nulla aliquet in.</p>
        );
    }
    else {
        previewElement = <div className="preview__box" style={outputStyle}></div>;
    }

    return (
        <section className="main__section main__section--preview">
            <h4 className="title is-4">Preview</h4>
            {previewElement}
        </section>
    );
}

export default withRouter(Preview);