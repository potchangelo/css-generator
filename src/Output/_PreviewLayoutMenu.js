import React from 'react';

function PreviewLayoutMenu(props) {
    const { layoutType, containerStyle } = props;
    return (
        <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
            <div className="preview__layout-item">
                <a className="menu-title">Site Title</a>
            </div>
            <div className="preview__layout-item">
                <a>Link 1</a>
                <a>Link 2</a>
            </div>
        </div>
    )
}

export default PreviewLayoutMenu;