import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import NotFoundPage from '../../components/NotFoundPage';
import { BrowserRouter } from "react-router";

test('shouldRenderNotFoundPageCorrectly', () => {
    const renderer = render(<BrowserRouter><NotFoundPage /></BrowserRouter>);
    expect(renderer.baseElement).toMatchSnapshot();
});