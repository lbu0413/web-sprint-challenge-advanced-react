import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const submitButton = screen.getByRole(/button/i)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const submitButton = screen.getByRole(/button/i)
    
    fireEvent.change(firstName, {target: {value: 'Paul'}})
    fireEvent.change(lastName, {target: {value: 'Kim'}})
    fireEvent.change(address, {taget: {value:'0413 Paul St.'}})
    fireEvent.change(city, {target: {value:'Duluth'}})
    fireEvent.change(state, {target: {value: 'GA'}})
    fireEvent.change(zip, {target: {value: '30096'}})
    fireEvent.click(submitButton)
});
