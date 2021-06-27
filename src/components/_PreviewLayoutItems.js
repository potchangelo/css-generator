import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './css/preview.module.scss';
import { layoutItemContentArray } from '../helpers';

const unequalLineArray = [3, 2, 1, 2];

function PreviewLayoutItems(props) {
    const { layoutType, containerStyle, itemStyle, preview } = props;

    const itemElements = layoutItemContentArray.map((content, itemIndex) => {
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
                className={styles.item}
                style={itemStyle}>
                <div className={styles.itemContent}>
                    {previewElements}
                </div>
            </div>
        );
    });

    return (
        <div className={styles.layoutContainer} data-type={layoutType} style={containerStyle}>
            {itemElements}
        </div>
    );
}

PreviewLayoutItems.propTypes = {
    layoutType: PropTypes.string.isRequired,
    containerStyle: PropTypes.object.isRequired,
    itemStyle: PropTypes.object,
    preview: PropTypes.string
};

PreviewLayoutItems.defaultProps = {
    itemStyle: {}
};

export default PreviewLayoutItems;