import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
    render(<Header/>)

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})