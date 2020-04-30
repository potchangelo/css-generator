import React from 'react';
import { LeftNav } from '..';
import { menuGroupArray, renderWithRouterAndNavContext } from '../../Helper';

test('LeftNav is hidden on mobile if isNavOpenMobile is false', () => {
    const { container } = renderWithRouterAndNavContext(
        <LeftNav/>, { isNavOpenMobile: false }
    );
    expect(container.querySelector('.leftnav.is-hidden-mobile')).not.toBeNull();
});

test('LeftNav is shown on mobile if isNavOpenMobile is true', () => {
    const { container } = renderWithRouterAndNavContext(
        <LeftNav/>, { isNavOpenMobile: true }
    );
    expect(container.querySelector('.leftnav.is-hidden-mobile')).toBeNull();
});

test('LeftNav has no active menu item on dashboard page', () => {
    const { container } = renderWithRouterAndNavContext(
        <LeftNav/>
    );
    expect(container.querySelector('a.active')).toBeNull();
});

test('LeftNav has active menu item on each random input pages', () => {
    for (let i = 0; i <= 2; i++) {
        const groupIndex = Math.floor(Math.random() * menuGroupArray.length);
        const { linkArray } = menuGroupArray[groupIndex];
        const linkIndex = Math.floor(Math.random() * linkArray.length);
        const { url, title } = linkArray[linkIndex];

        const { container } = renderWithRouterAndNavContext(
            <LeftNav/>, { route: `/${url}` }
        );
        const element = container.querySelector(`[href="/${url}"]`);
        expect(element).not.toBeNull();
        expect(element.classList.contains('active')).toBeTruthy();
        expect(element.textContent).toBe(title);
    }
});