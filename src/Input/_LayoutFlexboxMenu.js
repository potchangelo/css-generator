import React, { useState, useEffect } from 'react';
import { MainSection } from '../Layout';
import { layoutMenuHtml } from '../Helper';

const layoutArray = [
    { key: 'left', imageUrl: '/images/menu-bar-01.png', selectedImageUrl: '/images/menu-bar-01.png' },
    { key: 'right', imageUrl: '/images/menu-bar-02.png', selectedImageUrl: '/images/menu-bar-02.png' }
];

function LayoutFlexboxMenu(props) {
    // Props ,States
    const { updateOutput } = props;
    const [layout, setLayout] = useState('left');

    // Effects
    useEffect(() => {
        const justifyContent = (layout === 'right') ? 'space-between' : 'flex-start';
        const style = {
            layoutType: `flexbox-menu`,
            containerStyle: { justifyContent },
        }

        const css = '' +
            `.menu-bar {\n` +
            `    display: flex;\n` +
            `    justify-content: ${justifyContent};\n` +
            `    background-color: #1988f7;\n` +
            `}\n\n` +
            `.item {\n` +
            `    color: white;\n` +
            `    background-color: transparent;\n` +
            `    font-size: 18px;\n` +
            `    display: inline-block;\n` +
            `    padding: 14px 20px;\n` +
            `}\n\n` +
            `.item.title {\n` +
            `    font-weight: 600;\n` +
            `}\n\n` +
            `.item:hover {\n` +
            `    background-color: rgba(0, 0, 0, 0.1);\n` +
            `}`;

        updateOutput(style, css, layoutMenuHtml);
    }, [updateOutput, layout]);

    // Elements
    const layoutElements = layoutArray.map((_layout, index) => {
        let classes = 'button is-fullwidth is-image';
        let imageUrl = _layout.imageUrl;
        if (_layout.key === layout) {
            classes += ' is-dark is-selected';
            imageUrl = _layout.selectedImageUrl;
        }
        return (
            <React.Fragment key={_layout.key}>
                <label className="label">Style {index + 1}</label>
                <p>
                    <button
                        className={classes}
                        onClick={_ => setLayout(_layout.key)}>
                        <img src={imageUrl} />
                    </button>
                </p>
            </React.Fragment>
        );
    });

    return (
        <MainSection extraClass="main__section-inputs" title="Flexbox Menu Bar Layout" subTitle="Customizing">
            <div className="inputs">
                <h5 className="title is-5">Select style</h5>
                <div className="content">
                    {layoutElements}
                </div>
            </div>
        </MainSection>
    );
}

export default LayoutFlexboxMenu;