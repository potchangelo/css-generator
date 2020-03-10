import { colorHexToRgba, colorHexToRgbNumbers, gradientMiddleHex, gradientMiddleAlpha } from '../Helpers';

test('HEX color to RGBA color', () => {
    expect(colorHexToRgba('#000000', 1)).toBe('rgba(0, 0, 0, 1)');
    expect(colorHexToRgba('#333333', 1)).toBe('rgba(51, 51, 51, 1)');
    expect(colorHexToRgba('#999999', 1)).toBe('rgba(153, 153, 153, 1)');
    expect(colorHexToRgba('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
});

test('Gradient middle HEX color', () => {
    expect(gradientMiddleHex('#000000', '#FFFFFF', 0.5)).toBe('#808080');
})