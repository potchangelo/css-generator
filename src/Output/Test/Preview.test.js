import React from 'react';
import { Preview } from '..';
import { renderWithRouter } from '../../Helper';

test('Preview default mode is box mode', () => {
    const { container } = renderWithRouter(<Preview />)
    expect(container.querySelector('.preview__box')).not.toBeNull();
});

test('Preview text mode', () => {
    const { container } = renderWithRouter(<Preview />, { route: '/text' });
    expect(container.querySelector('.preview__text')).not.toBeNull();
});

test('Preview filter mode', () => {
    const { container } = renderWithRouter(<Preview />, { route: '/filter' });
    expect(container.querySelector('.preview__image')).not.toBeNull();
});

test('Preview transform mode', () => {
    const { container } = renderWithRouter(<Preview />, { route: '/transform' });
    expect(container.querySelector('.preview__transform-box')).not.toBeNull();
});