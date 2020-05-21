const menuGroupArray = [
    {
        name: 'Layout',
        linkArray: [
            { url: 'layout-flexbox-items', title: 'Flexbox Items' },
            { url: 'layout-flexbox-menu-bar', title: 'Flexbox Menu Bar' },
            { url: 'layout-flexbox-gallery', title: 'Flexbox Gallery' },
            { url: 'layout-float', title: 'Float' }
        ]
    },
    {
        name: 'Background',
        linkArray: [
            { url: 'background-color', title: 'Background Color' }, 
            { url: 'background-gradient', title: 'Background Gradient' },
            { url: 'background-image', title: 'Background Image' }
        ]
    },
    {
        name: 'Border',
        linkArray: [
            { url: 'border', title: 'Border' }, 
            { url: 'border-radius', title: 'Border Radius' }, 
            { url: 'box-shadow', title: 'Box Shadow' }
        ]
    },
    {
        name: 'Transform',
        linkArray: [
            { url: 'transform-translate', title: 'Translate' }, 
            { url: 'transform-rotate', title: 'Rotate' },
            { url: 'transform-scale', title: 'Scale' }, 
            { url: 'transform-skew', title: 'Skew' }
        ]
    },
    {
        name: 'Filter',
        linkArray: [
            { url: 'filter-blur', title: 'Blur' }, 
            { url: 'filter-brightness', title: 'Brightness' },
            { url: 'filter-contrast', title: 'Contrast' }, 
            { url: 'filter-grayscale', title: 'Grayscale' },
            { url: 'filter-hue-rotate', title: 'Hue-Rotate' }, 
            { url: 'filter-invert', title: 'invert' },
            { url: 'filter-saturate', title: 'Saturate' }, 
            { url: 'filter-sepia', title: 'Sepia' }
        ]
    },
    {
        name: 'Text',
        linkArray: [
            { url: 'text', title: 'Text' }, 
            { url: 'text-shadow', title: 'Text Shadow' }
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

function layoutItemsHtml(ctnClass) {
    let layoutItemHtml = '';
    layoutItemsContent.forEach(content => {
        layoutItemHtml += '' + 
            `  <div class="item">\n` + 
            `    <div class="content">\n` + 
            `      <p>${content}</p>\n` + 
            `    </div>\n` + 
            `  </div>\n`;
    });
    return `<div class="${ctnClass}">\n` + layoutItemHtml + `</div>`;
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
    'https://images.unsplash.com/photo-1497290756760-23ac55edf36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', 
    'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', 
];


function layoutGalleryHtml() {
    let layoutItemHtml = '';
    layoutGalleryImageUrl.forEach(imageUrl => {
        layoutItemHtml += '' + 
        `      <div class="item">\n` + 
        `        <div class="content">\n` + 
        `          <img src="${imageUrl}" alt="Image" />\n` + 
        `        </div>\n` +
        `      </div>\n`;
    });
    return '' + 
        `<div class="gallery-wrapper">\n` + 
        `  <div class="gallery-scroll">\n` + 
        `    <div class="gallery-flexbox">\n` + 
        layoutItemHtml + 
        `    </div>\n` + 
        `  </div>\n` + 
        `</div>`;
}

export {
     menuGroupArray, layoutItemSizeArray, layoutPreviewArray, 
     layoutItemsContent, layoutGalleryImageUrl, 
     layoutItemsHtml, layoutMenuHtml, layoutGalleryHtml
};