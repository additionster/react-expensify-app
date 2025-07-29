
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Header} from '../../components/Header';
import { BrowserRouter } from 'react-router';

let startLogoutSpy, renderer;
beforeEach(() => {
    startLogoutSpy = jest.fn();
    renderer = render(
        <BrowserRouter>
            <Header startLogout={startLogoutSpy}/>
        </BrowserRouter>
    );
});

test('shouldRenderHeaderCorrectly', () => {
    expect(renderer.baseElement).toMatchSnapshot();
    expect(screen.getByRole('heading')).toHaveTextContent('Expensify');
});

test('shouldCallStartLogoutOnButtonClick', () => {
    const logoutButton = screen.getAllByRole('button').at(0);
    fireEvent.click(logoutButton);
    expect(startLogoutSpy).toHaveBeenCalled();
});