const menuGroupArray = [
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
    },
    {
        name: 'Transform',
        linkArray: [
            { url: 'transform-translate', title: 'Translate' }, 
            { url: 'transform-rotate', title: 'Rotate' },
            { url: 'transform-scale', title: 'Scale' }, 
            { url: 'transform-skew', title: 'Skew' }
        ]
    }
];

function colorHexToRgba(hex, a) {
    const { r, g, b } = colorHexToRgbNumbers(hex);
    let calcA = Number(a.toFixed(2));
    if (calcA % 1 === 0) calcA = Number(a.toFixed(0));
    else if (calcA % 0.1 === 0) calcA = Number(a.toFixed(1));
    return `rgba(${r}, ${g}, ${b}, ${calcA})`;
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
    else {
        hR = '00'; 
        hG = '00'; 
        hB = '00';
    }

    if (hR.length === 1) hR += hR;
    if (hG.length === 1) hG += hG;
    if (hB.length === 1) hB += hB;

    const r = parseInt(hR, 16), g = parseInt(hG, 16), b = parseInt(hB, 16);
    return { r, g, b };
}

function gradientMiddleHex(hexL, hexR, ratio) {
    const rgbL = colorHexToRgbNumbers(hexL);
    const rgbR = colorHexToRgbNumbers(hexR);
    let rgbM = {};
    ['r', 'g', 'b'].forEach(c => {
        let numL = rgbL[c], numR = rgbR[c], calcRatio = ratio;
        if (numL > numR) {
            const tempL = numL;
            numL = numR;
            numR = tempL;
            calcRatio = 1 - ratio;
        }
        rgbM[c] = Math.round(numL + (numR - numL) * calcRatio);
    })
    let { r, g, b } = rgbM;
    const hR = (r < 16) ? '0' + r.toString(16) : r.toString(16);
    const hG = (g < 16) ? '0' + g.toString(16) : g.toString(16);
    const hB = (b < 16) ? '0' + b.toString(16) : b.toString(16);
    return `#${hR}${hG}${hB}`;
}

function gradientMiddleAlpha(aL, aR, ratio) {
    let calcAL = aL, calcAR = aR, calcRatio = ratio;
    if (aL > aR) {
        calcAL = aR;
        calcAR = aL;
        calcRatio = 1 - ratio;
    }
    return calcAL + (calcAR - calcAL) * calcRatio;
}

export { menuGroupArray, colorHexToRgba, colorHexToRgbNumbers, gradientMiddleHex, gradientMiddleAlpha };