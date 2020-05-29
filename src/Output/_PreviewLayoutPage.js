import React from 'react';

function PreviewLayoutPage(props) {
    const { layoutType, containerStyle, preview = '' } = props;

    let leftbar = null, rightbar = null;
    if (preview.includes('l')) {
        leftbar = (
            <aside className="preview__layout-leftbar">
                <div className="item__content">Leftbar</div>
            </aside>
        );
    }
    if (preview.includes('r')) {
        rightbar = (
            <aside className="preview__layout-rightbar">
                <div className="item__content">Leftbar</div>
            </aside>
        );
    }

    return (
        <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
            <header className="preview__layout-header">
                <div className="item__content">Header</div>
            </header>
            {leftbar}
            <main className="preview__layout-main">
                <div className="item__content">Main</div>
            </main>
            {rightbar}
            <footer className="preview__layout-footer">
                <div className="item__content">Footer</div>
            </footer>
        </div>
    )
}

export default PreviewLayoutPage;