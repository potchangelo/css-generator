import React from 'react';
import { fireEvent } from '@testing-library/react';
import { HeaderNav } from '..';
import { renderWithRouterAndNavContext } from '../../Helper';

test('HeaderNav menu is clickable', () => {
    const mockFn = jest.fn()
    const { container } = renderWithRouterAndNavContext(
        <HeaderNav/>, { dispatch: mockFn }
    );

    const menu = container.querySelector('.headernav__menu');
    expect(menu).not.toBeNull();

    fireEvent.click(menu);
    expect(mockFn.mock.calls.length).toBe(1);

    fireEvent.click(menu);
    fireEvent.click(menu);
    expect(mockFn.mock.calls.length).toBe(3);
});