import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { LoginPage } from "../../components/LoginPage";
import { BrowserRouter } from "react-router";

let startLoginButtonSpy, renderer;

beforeEach(() => {
    startLoginButtonSpy = jest.fn();
    renderer = render(
        <BrowserRouter>
            <LoginPage startLogin={startLoginButtonSpy}/>
        </BrowserRouter>
    );
});

test('testRenderLoginPage', () => {
    expect(renderer.baseElement).toMatchSnapshot();
});

test('shouldCallStartLoginButton', () => {
    const loginButton = screen.getAllByRole('button').at(0);
    fireEvent.click(loginButton);
    expect(startLoginButtonSpy).toHaveBeenCalled();
});