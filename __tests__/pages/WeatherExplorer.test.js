/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { WeatherExplorer } from "../../src/pages/WeatherExplorer";

test('page title is Weather Explorer',()=> {

    render(<WeatherExplorer />);

    const element = screen.getByText("Weather Explorer");

    expect(element).toBeInTheDocument();

});

test('should have two textbox fields, one for City and other for Country', async ()=>{

    render(<WeatherExplorer />);

    const elements = await screen.getAllByRole("textbox");

    expect(elements).toHaveLength(2);

    const cityTextBox = elements.find(x=>x.placeholder == "City");
    expect(cityTextBox).not.toBeUndefined();

    const countryTextBox = elements.find(x=>x.placeholder == "Country Code, Eg: UK");
    expect(countryTextBox).not.toBeUndefined();

});