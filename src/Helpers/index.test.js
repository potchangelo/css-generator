import { colorHexToRgba, colorHexToRgbNumbers, gradientMiddleHex, gradientMiddleAlpha } from '../Helpers';

test('HEX color to RGBA color (6 digits)', () => {
    expect(colorHexToRgba('#000000')).toBe('rgba(0, 0, 0, 1)');
    expect(colorHexToRgba('#333333')).toBe('rgba(51, 51, 51, 1)');
    expect(colorHexToRgba('#999999')).toBe('rgba(153, 153, 153, 1)');
    expect(colorHexToRgba('#FFFFFF')).toBe('rgba(255, 255, 255, 1)');
    expect(colorHexToRgba('#4287f5')).toBe('rgba(66, 135, 245, 1)');
    expect(colorHexToRgba('#fcba03')).toBe('rgba(252, 186, 3, 1)');
    expect(colorHexToRgba('#32a852')).toBe('rgba(50, 168, 82, 1)');
    expect(colorHexToRgba('#eb4034')).toBe('rgba(235, 64, 52, 1)');
});

test('HEX color to RGBA color (3 digits)', () => {
    expect(colorHexToRgba('#000')).toBe('rgba(0, 0, 0, 1)');
    expect(colorHexToRgba('#333')).toBe('rgba(51, 51, 51, 1)');
    expect(colorHexToRgba('#999')).toBe('rgba(153, 153, 153, 1)');
    expect(colorHexToRgba('#FFF')).toBe('rgba(255, 255, 255, 1)');
    expect(colorHexToRgba('#123')).toBe('rgba(17, 34, 51, 1)');
    expect(colorHexToRgba('#2E9')).toBe('rgba(34, 238, 153, 1)');
});

test('Gradient middle HEX color (left < right)', () => {
    expect(gradientMiddleHex('#000000', '#FFFFFF', 0.5)).toBe('#808080');
    expect(gradientMiddleHex('#000000', '#020202', 0.24)).toBe('#000000');
    expect(gradientMiddleHex('#000000', '#020202', 0.25)).toBe('#010101');
    expect(gradientMiddleHex('#000000', '#020202', 0.5)).toBe('#010101');
    expect(gradientMiddleHex('#000000', '#020202', 0.74)).toBe('#010101');
    expect(gradientMiddleHex('#000000', '#020202', 0.75)).toBe('#020202');
});

test('Gradient middle HEX color (right < left)', () => {
    expect(gradientMiddleHex('#FFFFFF', '#000000', 0.5)).toBe('#808080');
    expect(gradientMiddleHex('#020202', '#000000', 0.25)).toBe('#020202');
    expect(gradientMiddleHex('#020202', '#000000', 0.26)).toBe('#010101');
    expect(gradientMiddleHex('#020202', '#000000', 0.5)).toBe('#010101');
    expect(gradientMiddleHex('#020202', '#000000', 0.75)).toBe('#010101');
    expect(gradientMiddleHex('#020202', '#000000', 0.76)).toBe('#000000');
});