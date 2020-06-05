import React from 'react';

function PreviewLayoutPage(props) {
    const { layoutType, containerStyle, preview = '' } = props;

    let leftbar = null, rightbar = null;
    if (preview.includes('l')) {
        leftbar = (
            <aside className="preview__layout-leftbar">
                <div className="item__content"><p>Leftbar</p></div>
            </aside>
        );
    }
    if (preview.includes('r')) {
        rightbar = (
            <aside className="preview__layout-rightbar">
                <div className="item__content"><p>Rightbar</p></div>
            </aside>
        );
    }

    return (
        <div className="preview__layout-container" data-type={layoutType} style={containerStyle}>
            <header className="preview__layout-header">
                <div className="item__content"><p>Header</p></div>
            </header>
            {leftbar}
            {rightbar}
            <main className="preview__layout-main">
                <div className="item__content"><p>Main</p></div>
            </main>
            <footer className="preview__layout-footer">
                <div className="item__content"><p>Footer</p></div>
            </footer>
        </div>
    )
}

export default PreviewLayoutPage;