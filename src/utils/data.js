const menuGroups = [
  {
    name: 'Layout',
    links: [
      { url: 'layout-flexbox-items', title: 'Flexbox Items' },
      { url: 'layout-flexbox-menu-bar', title: 'Flexbox Menu Bar' },
      { url: 'layout-flexbox-gallery', title: 'Flexbox Gallery' },
      { url: 'layout-grid-items', title: 'Grid Items' },
      { url: 'layout-grid-page', title: 'Grid Page' },
      { url: 'layout-float', title: 'Float' },
    ],
  },
  {
    name: 'Background',
    links: [
      { url: 'background-color', title: 'Background Color' },
      { url: 'background-gradient', title: 'Background Gradient' },
      { url: 'background-image', title: 'Background Image' },
    ],
  },
  {
    name: 'Border',
    links: [
      { url: 'border', title: 'Border' },
      { url: 'border-radius', title: 'Border Radius' },
      { url: 'box-shadow', title: 'Box Shadow' },
    ],
  },
  {
    name: 'Transform',
    links: [
      { url: 'transform-translate', title: 'Translate' },
      { url: 'transform-rotate', title: 'Rotate' },
      { url: 'transform-scale', title: 'Scale' },
      { url: 'transform-skew', title: 'Skew' },
    ],
  },
  {
    name: 'Filter',
    links: [
      { url: 'filter-blur', title: 'Blur' },
      { url: 'filter-brightness', title: 'Brightness' },
      { url: 'filter-contrast', title: 'Contrast' },
      { url: 'filter-grayscale', title: 'Grayscale' },
      { url: 'filter-hue-rotate', title: 'Hue-Rotate' },
      { url: 'filter-invert', title: 'Invert' },
      { url: 'filter-saturate', title: 'Saturate' },
      { url: 'filter-sepia', title: 'Sepia' },
    ],
  },
  {
    name: 'Text',
    links: [
      { url: 'text', title: 'Text' },
      { url: 'text-shadow', title: 'Text Shadow' },
    ],
  },
];

const layoutItemSizeOptions = [
  {
    key: 'one-second',
    title: '50% (1/2)',
    value: 50,
    nthClear: '2n + 1',
    templateColumns: '1fr 1fr',
  },
  {
    key: 'one-third',
    title: '33.33% (1/3)',
    value: 33.33,
    nthClear: '3n + 1',
    templateColumns: '1fr 1fr 1fr',
  },
  {
    key: 'one-fourth',
    title: '25% (1/4)',
    value: 25,
    nthClear: '4n + 1',
    templateColumns: '1fr 1fr 1fr 1fr',
  },
];

const layoutPreviewOptions = [
  {
    key: 'eqh',
    title: 'Equal Height',
    value: 'equal-height',
  },
  {
    key: 'uneqh',
    title: 'Unequal Height',
    value: 'unequal-height',
  },
];

const layoutItemContents = ['11111', '22222', '33333', '44444'];

/**
 * @param {string} layoutType grid, flexbox, or floatbox
 */
function layoutItemsHtml(layoutType) {
  let layoutItemHtml = '';
  layoutItemContents.forEach(content => {
    layoutItemHtml +=
      `  <div class="item">\n` +
      `    <div class="content">\n` +
      `      <p>${content}</p>\n` +
      `    </div>\n` +
      `  </div>\n`;
  });
  return `<div class="${layoutType}">\n` + layoutItemHtml + `</div>`;
}

const layoutMenuHtml =
  `<nav class="menu-bar">\n` +
  `  <div class="group">\n` +
  `    <a class="item title">Site Title</a>\n` +
  `  </div>\n` +
  `  <div class="group">\n` +
  `    <a class="item">Link 1</a>\n` +
  `    <a class="item">Link 2</a>\n` +
  `  </div>\n` +
  `</nav>`;

const layoutGalleryImageUrls = [
  'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];

function layoutGalleryHtml() {
  let layoutItemHtml = '';
  layoutGalleryImageUrls.forEach(imageUrl => {
    // prettier-ignore
    layoutItemHtml +=
      `      <div class="item">\n` +
      `        <img src="${imageUrl}" alt="Image" />\n` +
      `      </div>\n`;
  });
  return (
    `<div class="gallery-wrapper">\n` +
    `  <div class="gallery-scroll">\n` +
    `    <div class="gallery">\n` +
    layoutItemHtml +
    `    </div>\n` +
    `  </div>\n` +
    `</div>`
  );
}

/**
 * @param {string} layout Layout key
 */
function layoutPageHtml(layout) {
  let leftbarHtml = '',
    rightbarHtml = '';
  if (layout.includes('l')) {
    leftbarHtml =
      `  <aside class="page-leftbar">\n` +
      `    <div class="content">\n` +
      `      <p>Leftbar</p>\n` +
      `    </div>\n` +
      `  </aside>\n`;
  }
  if (layout.includes('r')) {
    rightbarHtml =
      `  <aside class="page-rightbar">\n` +
      `    <div class="content">\n` +
      `      <p>Rightbar</p>\n` +
      `    </div>\n` +
      `  </aside>\n`;
  }
  return (
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
    `</div>`
  );
}

/**
 * @param {string[]} values List of value strings
 * @param {string} separator Separator string
 */
function optionsUpper(values, separator = ' ') {
  return values.map(value => {
    const title = value
      .split(separator)
      .map(s => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
    return { key: `${value}`, value, title };
  });
}

export {
  menuGroups,
  layoutItemSizeOptions,
  layoutPreviewOptions,
  layoutItemContents,
  layoutGalleryImageUrls,
  layoutItemsHtml,
  layoutMenuHtml,
  layoutGalleryHtml,
  layoutPageHtml,
  optionsUpper,
};
