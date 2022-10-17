import React from 'react';
import previewFilter2 from 'z/images/preview-filter.jpg';

/**
 * @param {object} props
 * @param {import('react').CSSProperties} props.outputStyle
 */
function _PreviewFilter(props) {
  const { outputStyle } = props;
  return <img src={previewFilter2} alt="Preview" style={outputStyle} />;
}

export default _PreviewFilter;
