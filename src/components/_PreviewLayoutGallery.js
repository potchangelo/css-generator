import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/preview.module.scss';
import { layoutGalleryImageUrl } from '../helpers';

function PreviewLayoutGallery(props) {
    const { 
        wrapperStyle, scrollStyle, 
        containerStyle, itemStyle 
    } = props;

    const itemElements = layoutGalleryImageUrl.map((imageUrl, index) => {
        return (
            <div 
                key={`item-${index}`} 
                className={styles.item}
                style={itemStyle}>
                <img src={imageUrl} alt="Image" />
            </div>
        );
    });

    return (
        <div className={styles.galleryWrapper} style={wrapperStyle}>
            <div className={styles.galleryScroll} style={scrollStyle}>
                <div className={styles.layoutContainer} data-type="flexbox-gallery" style={containerStyle}>
                    {itemElements}
                </div>
            </div>
        </div>
    );
}

PreviewLayoutGallery.propTypes = {
    wrapperStyle: PropTypes.object.isRequired,
    scrollStyle: PropTypes.object.isRequired,
    containerStyle: PropTypes.object.isRequired,
    itemStyle: PropTypes.object.isRequired
};

export default PreviewLayoutGallery;