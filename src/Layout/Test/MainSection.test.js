import React from 'react';
import { render } from '@testing-library/react';
import { MainSection } from '..';

test('MainSection worked properly without props', () => {
    const { container } = render(<MainSection />);
    expect(container.querySelector('.main__section')).not.toBeNull();
    expect(container.textContent).toBeFalsy();
});

test('MainSection has no extra class if not inserted', () => {
    const { container } = render(<MainSection />);
    expect(container.querySelector('.main__section').className).toBe('main__section');
});

test('MainSection has no extra class if inserted as null', () => {
    const { container } = render(<MainSection extraClass={null} />);
    expect(container.querySelector('.main__section').className).toBe('main__section');
});

test('MainSection has no extra class if inserted as empty string', () => {
    const { container } = render(<MainSection extraClass='' />);
    expect(container.querySelector('.main__section').className).toBe('main__section');
});