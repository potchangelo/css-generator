import React from 'react';
import { layoutItemContents } from 'z/utils/data';
import * as styles from './css/preview.module.scss';

const unequalLines = [3, 2, 1, 2];

/**
 * @param {object} props
 * @param {string} props.layoutType
 * @param {import('react').CSSProperties} props.containerStyle
 * @param {import('react').CSSProperties} [props.itemStyle]
 * @param {string} props.preview
 */
function _PreviewLayoutItems(props) {
  const { layoutType, containerStyle, itemStyle = {}, preview } = props;

  const itemElements = layoutItemContents.map((content, index) => {
    let previewElements = <p>{content}</p>;
    if (preview === 'unequal-height') {
      const lines = [...Array(unequalLines[index]).keys()];
      // prettier-ignore
      previewElements = lines.map(lineIndex => (
        <p key={`p-${index}-${lineIndex}`}>{content}</p>
      ));
    }

    return (
      <div key={`item-${index}`} className={styles.item} style={itemStyle}>
        <div className={styles.itemContent}>{previewElements}</div>
      </div>
    );
  });

  return (
    <div className={styles.layoutContainer} data-type={layoutType} style={containerStyle}>
      {itemElements}
    </div>
  );
}

export default _PreviewLayoutItems;
