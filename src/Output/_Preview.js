import React from 'react';
import { withRouter } from 'react-router-dom';
import { MainSection } from '../Layout';

const Content = ({ char }) => <p>{`${char}`.repeat(5)}</p>;
const contentCountArray = [2, 1, 1, 2];

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
    else if(path.startsWith('/layout')) {
        const { 
            layoutType, containerStyle, itemStyle, preview 
        } = outputStyle;

        const itemElements = contentCountArray.map((_, index) => {
            const char = `${index + 1}`;
            let previewElements = <Content key={`key-${char}`} char={char} />
            if (preview === 'unequal-height') {
                previewElements = [...Array(contentCountArray[index]).keys()].map(_index => 
                    <Content key={`key-${char}-${_index + 1}`} char={char} />
                );
            }
            return (
                <div 
                    key={`item-${index}`} 
                    className="preview__layout-item"
                    style={itemStyle}>
                    <div className="item__content">
                        {previewElements}
                    </div>
                </div>
            );
        });

        element = (
            <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
                {itemElements}
            </div>
        );
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