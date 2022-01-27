import React from 'react';
import { layoutGalleryImageUrls } from 'z/utils/data';
import * as styles from './css/preview.module.scss';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.wrapperStyle
 * @param {import('react').CSSProperties} props.scrollStyle
 * @param {import('react').CSSProperties} props.containerStyle
 * @param {import('react').CSSProperties} props.itemStyle
 */
function _PreviewLayoutGallery(props) {
  const { wrapperStyle, scrollStyle, containerStyle, itemStyle } = props;

  const itemElements = layoutGalleryImageUrls.map((imageUrl, index) => (
    <div key={`item-${index}`} className={styles.item} style={itemStyle}>
      <img src={imageUrl} alt="Item" />
    </div>
  ));

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

export default _PreviewLayoutGallery;
