import React, { Fragment } from "react";
import Form from "./Form";
import "@testing-library/jest-dom";
import { getByText, render } from "@testing-library/react";

describe("Form test", () => {
  test("1st testing", () => {
    const { getByLabelText } = render(<Form />);
    const finput = getByLabelText(/Name:/i);
    expect(finput).toHaveAttribute("type", "text");
  });
  test("2nd testing", () => {
    const { getByLabelText } = render(<Form />);
    const linput = getByLabelText(/Last:/i);
    expect(linput).toHaveAttribute("type", "text");
  });
  test("3rd testing", () => {
    const { getByLabelText } = render(<Form />);
    const address = getByLabelText(/Address1:/i);
    expect(address).toHaveAttribute("type", "text");
  });
  test("4th testing", () => {
    const { getByLabelText } = render(<Form />);
    const address = getByLabelText(/city:/i);
    expect(address).toHaveAttribute("type", "text");
  });
  test("5th testing", () => {
    const { getByLabelText } = render(<Form />);
    const address = getByLabelText(/zip:/i);
    expect(address).toHaveAttribute("type", "number");
  });
});
