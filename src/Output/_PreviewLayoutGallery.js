import React from 'react';
import { layoutGalleryImageUrl } from '../Helper';

function PreviewLayoutGallery(props) {
    const { 
        layoutType, 
        wrapperStyle, scrollStyle,
        containerStyle, itemStyle 
    } = props;

    const itemElements = layoutGalleryImageUrl.map((imageUrl, index) => {
        return (
            <div 
                key={`item-${index}`} 
                className="preview__layout-item"
                style={itemStyle}>
                <img src={imageUrl} alt="Image" />
            </div>
        );
    });

    return (
        <div className="preview__gallery-wrapper" style={wrapperStyle}>
            <div className="preview__gallery-scroll" style={scrollStyle}>
                <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
                    {itemElements}
                </div>
            </div>
        </div>
    )
}

export default PreviewLayoutGallery;