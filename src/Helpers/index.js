const menuGroupArray = [
    {
        name: 'Background',
        links: [
            ['background-color', 'Background Color'], ['background-gradient', 'Background Gradient'],
            ['background-image', 'Background Image']
        ]
    },
    {
        name: 'Border',
        links: [
            ['border', 'Border'], ['border-radius', 'Border Radius'], ['box-shadow', 'Box Shadow']
        ]
    },
    {
        name: 'Filter',
        links: [
            ['filter-blur', 'Blur'], ['filter-brightness', 'Brightness'],
            ['filter-contrast', 'Contrast'], ['filter-grayscale', 'Grayscale'],
            ['filter-hue-rotate', 'Hue-Rotate'], ['filter-invert', 'invert'],
            ['filter-saturate', 'Saturate'], ['filter-sepia', 'Sepia']
        ]
    },
    {
        name: 'Text',
        links: [
            ['text', 'Text'], ['text-shadow', 'Text Shadow']
        ]
    },
    {
        name: 'Transform',
        links: [
            ['transform-translate', 'Translate'], ['transform-rotate', 'Rotate'],
            ['transform-scale', 'Scale'], ['transform-skew', 'Skew']
        ]
    }
];

function colorHexToRgba(hex, a) {
    const { r, g, b } = colorHexToRgbNumbers(hex);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function colorHexToRgbNumbers(hex) {
    let hR, hG, hB;
    const pureHex = hex.replace('#', '');

    if (pureHex.length === 3) {
        hR = pureHex.charAt(0);
        hG = pureHex.charAt(1);
        hB = pureHex.charAt(2);
    }
    else if (pureHex.length === 6) {
        hR = pureHex.substring(0, 2);
        hG = pureHex.substring(2, 4);
        hB = pureHex.substring(4, 6);
    }
    else return null;

    if (hR.length === 1) hR += hR;
    if (hG.length === 1) hG += hG;
    if (hB.length === 1) hB += hB;

    const r = parseInt(hR, 16), g = parseInt(hG, 16), b = parseInt(hB, 16);
    return { r, g, b };
}

function gradientAddHex(hexL, hexR, ratio) {
    const rgbL = colorHexToRgbNumbers(hexL);
    const rgbR = colorHexToRgbNumbers(hexR);
    let rgbAdded = {};
    ['r', 'g', 'b'].forEach(c => {
        let numL = rgbL[c], numR = rgbR[c], calcRatio = ratio;
        if (numL > numR) {
            const tempL = numL;
            numL = numR;
            numR = tempL;
            calcRatio = 1 - ratio;
        }
        rgbAdded[c] = Math.round(numL + (numR - numL) * calcRatio);
    })
    const { r, g, b } = rgbAdded;
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

export { menuGroupArray, colorHexToRgba, colorHexToRgbNumbers, gradientAddHex };