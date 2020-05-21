import React from 'react';
import { withRouter } from 'react-router-dom';
import { MainSection } from '../Layout';
import PreviewLayoutItems from './_PreviewLayoutItems';

const LayoutMenuBar = (
    <>
        <div className="preview__layout-item">
            <a className="preview__menu-title">Site Title</a>
        </div>
        <div className="preview__layout-item">
            <a>Link 1</a>
            <a>Link 2</a>
        </div>
    </>
);

const LayoutGallery = (props) => (
    <div className="item">
        <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" alt="a" />
    </div>
);

function Preview(props) {
    // Props
    const { location, outputStyle } = props;

    // Elements
    let element, subTitle;
    const path = location.pathname;
    
    if (path.startsWith('/filter')) {
        element = <img className="preview__image" src="https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80" alt="Preview" style={outputStyle} />;
        subTitle = 'Image filter mode';
    }
    else if (path === '/layout-flexbox-menu-bar') {
        const { 
            layoutType, containerStyle
        } = outputStyle;

        element = (
            <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
                {LayoutMenuBar}
            </div>
        );
        subTitle = 'Layout mode';
    }
    else if (path === '/layout-flexbox-gallery') {
        const { 
            layoutType, containerStyle, itemStyle
        } = outputStyle;

        console.log(itemStyle)

        const itemElements = [0, 0, 0, 0].map((_, index) => {
            return (
                <div className="item" style={itemStyle}>
                    <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" alt="a" />
                </div>
            );
        });

        element = (
            <div className="l1">
                <div className="l2">
                    <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
                        {itemElements}
                    </div>
                </div>
            </div>
        );
        subTitle = 'Layout mode';
    }
    else if (path.startsWith('/layout')) {
        element = <PreviewLayoutItems {...outputStyle} />;
        subTitle = 'Layout mode';
    }
    else if (path.startsWith('/text')) {
        element = (
            <p className="preview__text" style={outputStyle}>Praesent eget tempus leo. Curabitur sit amet enim in lorem placerat consequat ac at nunc. Curabitur eget est ultricies, tincidunt augue efficitur, pellentesque nulla. Vivamus non aliquet libero, ut tincidunt diam. Quisque nec nulla ut erat pretium ultricies quis nec dolor. Etiam sed leo lorem. Sed sagittis arcu lacus, eget dapibus nulla aliquet in.</p>
        );
        subTitle = 'Text mode';
    }
    else if (path.startsWith('/transform')) {
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