function hexToRgba(hex, a) {
    let r, g, b;
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        r = hex.charAt(0);
        g = hex.charAt(1);
        b = hex.charAt(2);
    } 
    else if (hex.length === 6) {
        r = hex.substring(0, 2);
        g = hex.substring(2, 4);
        b = hex.substring(4, 6);
    } 
    else {
        return '';
    }
    if (r.length === 1) {
        r += r;
    }
    if (g.length === 1) {
        g += g;
    }
    if (b.length === 1) {
        b += b;
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

export { hexToRgba };