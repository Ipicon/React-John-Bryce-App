import Vat from "./Vat";
import {act, cleanup, render, screen} from "@testing-library/react";
import ReactDOM from "react-dom/client";
import monetaryService from "../../../Services/MonetaryService";
import userEvent from "@testing-library/user-event";

describe("Vat component", () => {
    const percent = 17;
    const component = <Vat percent={percent}/>;

    beforeEach(() => {
        render(component);
    });

    afterEach(() => {
        cleanup();
    });

    it("should render into DOM", () => {
        act(() => ReactDOM.createRoot(document.createElement("div")).render(component));
    });

    it("should contain several elements", () => {
        expect(screen.getByText("Vat Calculator")).toBeDefined();
        expect(screen.getByTestId("main-div")).toBeDefined();
        expect(screen.getByTitle(/calculating vat/i)).toBeDefined();
        expect(screen.getByLabelText("price", {exact: false})).toBeDefined();
        expect(screen.getByPlaceholderText("enter price")).toBeDefined();
    });

    it("should contain specific element type", () => {
        expect(screen.getByTitle(/calculating vat/i)).toBeInstanceOf(HTMLLabelElement);
        expect(screen.getByLabelText("price", {exact: false})).toBeInstanceOf(HTMLInputElement);
    });

    it("should contain specific css classes", () => {
        expect(screen.getByTestId("main-div")).toHaveClass("Vat Box");
    });

    it("should contain input with type=number", () => {
        expect(screen.getByPlaceholderText("enter price")).toHaveAttribute("type", "number");
    });

    it("should init text box with an empty string", () => {
        expect(screen.getByPlaceholderText("enter price")).toHaveDisplayValue("");
    });

    it("should calculate vat correctly", () => {
        const price = Math.floor(Math.random() * 1000);
        const vat = monetaryService.getVat(price, percent);

        userEvent.type(screen.getByPlaceholderText("enter price"), price.toString());
        expect(screen.getByRole("result")).toHaveTextContent(`${price}$ X ${percent}% = $${vat}`)
    });

    it("should clear values when clicking clean", () => {
        const price = Math.floor(Math.random() * 1000);

        userEvent.type(screen.getByPlaceholderText("enter price"), price.toString());
        userEvent.click(screen.getByRole("button", {name: "Clear"}));

        expect(screen.getByRole("result")).toHaveTextContent(`0$ X ${percent}% = $0`)
        expect(screen.getByPlaceholderText("enter price")).toHaveDisplayValue("");
    });
});