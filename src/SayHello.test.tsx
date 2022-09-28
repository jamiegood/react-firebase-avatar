import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";
import SayHello from "./index";

describe("<SayHello />", () => {
  test("should have the text jamie in a div", async () => {
    render(<SayHello name="jamie" />);
    expect(screen.getByText("jamie")).toBeInTheDocument();
    const linkElement = screen.getByText(/name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
