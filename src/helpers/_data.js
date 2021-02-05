const menuGroupArray = [
    {
        name: 'Background',
        linkArray: [
            { url: 'background-color', title: 'Background Color' }, 
            { url: 'background-gradient', title: 'Background Gradient' },
            { url: 'background-image', title: 'Background Image' }
        ]
    }
];

const layoutItemSizeArray = [
    {
         key: 'one-second', title: '50% (1/2)', 
         value: 50, nthClear: '2n + 1' 
    },
    {
         key: 'one-third', title: '33.33% (1/3)', 
         value: 33.33, nthClear: '3n + 1' 
    },
    {
         key: 'one-fourth', title: '25% (1/4)', 
         value: 25, nthClear: '4n + 1' 
    }
];

const layoutPreviewArray = [
    'equal-height', 'unequal-height'
];

const layoutItemsContent = [
    '11111', '22222', '33333', '44444'
];

function layoutItemsHtml(layoutType) {
    let layoutItemHtml = '';
    layoutItemsContent.forEach(content => {
        layoutItemHtml += '' + 
            `  <div class="item">\n` + 
            `    <div class="content">\n` + 
            `      <p>${content}</p>\n` + 
            `    </div>\n` + 
            `  </div>\n`;
    });
    return `<div class="${layoutType}">\n` + layoutItemHtml + `</div>`;
}

function layoutMenuHtml() {
    return '' + 
        `<nav class="menu-bar">\n` + 
        `  <div class="group">\n` + 
        `    <a class="item title">Site Title</a>\n` + 
        `  </div>\n` + 
        `  <div class="group">\n` + 
        `    <a class="item">Link 1</a>\n` + 
        `    <a class="item">Link 2</a>\n` + 
        `  </div>\n` + 
        `</nav>`;
}

const layoutGalleryImageUrl = [
    'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', 
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', 
    'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', 
];

function layoutGalleryHtml() {
    let layoutItemHtml = '';
    layoutGalleryImageUrl.forEach(imageUrl => {
        layoutItemHtml += '' + 
        `      <div class="item">\n` + 
        `        <img src="${imageUrl}" alt="Image" />\n` + 
        `      </div>\n`;
    });
    return '' + 
        `<div class="gallery-wrapper">\n` + 
        `  <div class="gallery-scroll">\n` + 
        `    <div class="gallery">\n` + 
        layoutItemHtml + 
        `    </div>\n` + 
        `  </div>\n` + 
        `</div>`;
}

function layoutPageHtml(layout) {
    let leftbarHtml = '', rightbarHtml = '';
    if (layout.key.includes('l')) {
        leftbarHtml = '' + 
            `  <aside class="page-leftbar">\n` + 
            `    <div class="content">\n` + 
            `      <p>Leftbar</p>\n` + 
            `    </div>\n` + 
            `  </aside>\n`;
    }
    if (layout.key.includes('r')) {
        rightbarHtml = '' + 
            `  <aside class="page-rightbar">\n` + 
            `    <div class="content">\n` + 
            `      <p>Rightbar</p>\n` + 
            `    </div>\n` + 
            `  </aside>\n`;
    }
    return '' + 
        `<div class="grid">\n` + 
        `  <header class="page-header">\n` + 
        `    <div class="content">\n` + 
        `      <p>Header</p>\n` + 
        `    </div>\n` + 
        `  </header>\n` + 
        leftbarHtml + 
        rightbarHtml + 
        `  <main class="page-main">\n` + 
        `    <div class="content">\n` + 
        `      <p>Main</p>\n` + 
        `    </div>\n` + 
        `  </main>\n` + 
        `  <footer class="page-footer">\n` + 
        `    <div class="content">\n` + 
        `      <p>Footer</p>\n` + 
        `    </div>\n` + 
        `  </footer>\n` + 
        `</div>`;
}

export {
     menuGroupArray, layoutItemSizeArray, layoutPreviewArray, 
     layoutItemsContent, layoutGalleryImageUrl, 
     layoutItemsHtml, layoutMenuHtml, layoutGalleryHtml,
     layoutPageHtml
};