import React from 'react';
import PropTypes from 'prop-types';
import { layoutGalleryImageUrls } from 'z/utils/data';
import * as styles from './css/preview.module.scss';

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

_PreviewLayoutGallery.propTypes = {
  wrapperStyle: PropTypes.object.isRequired,
  scrollStyle: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  itemStyle: PropTypes.object.isRequired,
};

export default _PreviewLayoutGallery;
