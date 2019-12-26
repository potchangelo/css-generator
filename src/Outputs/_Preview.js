import React from 'react';
import { withRouter } from 'react-router-dom';
import { MainSection } from '../Parents';
import './Css/Preview.scss';

function Preview(props) {
    // Props
    const { location, outputStyle } = props;

    // Elements
    let element, subTitle;
    if (location.pathname.startsWith('/text')) {
        element = (
            <p className="preview__text" style={outputStyle}>Praesent eget tempus leo. Curabitur sit amet enim in lorem placerat consequat ac at nunc. Curabitur eget est ultricies, tincidunt augue efficitur, pellentesque nulla. Vivamus non aliquet libero, ut tincidunt diam. Quisque nec nulla ut erat pretium ultricies quis nec dolor. Etiam sed leo lorem. Sed sagittis arcu lacus, eget dapibus nulla aliquet in.</p>
        );
        subTitle = 'Text mode';
    }
    else if (location.pathname.startsWith('/filter')) {
        element = <img className="preview__image" src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" alt="Preview" style={outputStyle} />;
        subTitle = 'Image filter mode';
    }
    else if (location.pathname.startsWith('/transform')) {
        element = (
            <div className="preview__transform-box" style={outputStyle}>
                <h2 className="title has-text-white">R</h2>
            </div>
        );
        subTitle = 'Transformed-Box mode';
    }
    else {
        element = <div className="preview__box" style={outputStyle} />;
        subTitle = 'Box mode';
    }

    return (
        <MainSection extraClass="main__section-preview" title="Preview" subTitle={subTitle}>
            {element}
        </MainSection>
    );
}

export default withRouter(Preview);