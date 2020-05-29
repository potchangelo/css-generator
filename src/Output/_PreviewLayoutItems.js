import React from 'react';
import { layoutItemsContent } from '../Helper';

const unequalLineArray = [3, 2, 1, 2]

function PreviewLayoutItems(props) {
    const { 
        layoutType, containerStyle, itemStyle = {}, preview 
    } = props;

    const itemElements = layoutItemsContent.map((content, itemIndex) => {
        let previewElements = <p>{content}</p>;
        if (preview === 'unequal-height') {
            const lineArray = [...Array(unequalLineArray[itemIndex]).keys()];
            previewElements = lineArray.map(lineIndex => (
                <p key={`p-${itemIndex}-${lineIndex}`}>{content}</p>
            ));
        }

        return (
            <div 
                key={`item-${itemIndex}`} 
                className="preview__layout-item"
                style={itemStyle}>
                <div className="item__content">
                    {previewElements}
                </div>
            </div>
        );
    });

    return (
        <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
            {itemElements}
        </div>
    )
}

export default PreviewLayoutItems;