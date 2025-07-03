
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';
import { BrowserRouter } from 'react-router';
import { screen } from '@testing-library/react';



test('shouldRenderHeaderCorrectly', () => {
    const renderer = render(<BrowserRouter><Header /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
    expect(screen.getByRole('heading')).toHaveTextContent('Expensify');
});