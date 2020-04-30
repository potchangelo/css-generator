import React from 'react';
import { Dimmer } from '..';
import { renderWithNavContext } from '../../Helper';

test('Dimmer disappeared if isNavOpenMobile is false', () => {
    const { container } = renderWithNavContext(
        <Dimmer/>, { isNavOpenMobile: false }
    );
    expect(container.querySelector('.dimmer')).toBeNull();
});

test('Dimmer appeared if isNavOpenMobile is true', () => {
    const { container } = renderWithNavContext(
        <Dimmer/>, { isNavOpenMobile: true }
    );
    expect(container.querySelector('.dimmer')).not.toBeNull();
});