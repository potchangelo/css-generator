/**
 * Get color in RGBA, converted from HEX
 * @param {string} hex Color HEX string
 * @param {number} a Color alpha 0-1
 * @returns {string} Color in RGBA
 */
function colorHexToRgba(hex, a = 1) {
    const { r, g, b } = colorHexToRgbNumbers(hex);
    let calcA = Number(a.toFixed(2));
    if (calcA % 1 === 0) calcA = Number(a.toFixed(0));
    else if (calcA % 0.1 === 0) calcA = Number(a.toFixed(1));
    return `rgba(${r}, ${g}, ${b}, ${calcA})`;
}

/**
 * Get R, G, B color numbers, converted from HEX
 * @param {string} hex Color HEX string
 * @returns {{ r: number, g: number, b: number }} Object of R, G, B numbers
 */
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

/**
 * Get color in HEX as a middle value in gradient, 
 * between left and right color in HEX
 * @param {string} hexL Color HEX string (left)
 * @param {string} hexR Color HEX string (right)
 * @param {number} ratio Position ratio 0-1
 * @returns {string} Color in HEX
 */
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

/**
 * Get color alpha as a middle value in gradient, 
 * between left and right alpha
 * @param {number} aL Alpha (left)
 * @param {number} aR Alpha (right)
 * @param {number} ratio Position ratio 0-1
 * @returns {number} Alpha number
 */
function gradientMiddleAlpha(aL, aR, ratio) {
    let calcAL = aL, calcAR = aR, calcRatio = ratio;
    if (aL > aR) {
        calcAL = aR;
        calcAR = aL;
        calcRatio = 1 - ratio;
    }
    return calcAL + (calcAR - calcAL) * calcRatio;
}

export { colorHexToRgba, colorHexToRgbNumbers, gradientMiddleHex, gradientMiddleAlpha };