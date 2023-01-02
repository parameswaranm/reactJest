import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  //   describe("Nested", () => {
  //     test("Renders with name", () => {
  //       render(<Greet name="CBAYogi" />);
  //       const textElement = screen.getByText("Hello CBAYogi");
  //       expect(textElement).toBeInTheDocument();
  //     });
  //   });
});

describe("Second Describe", () => {
  test("Renders with name", () => {
    render(<Greet name="CBAYogi" />);
    const textElement = screen.getByText("Hello CBAYogi");
    expect(textElement).toBeInTheDocument();
  });
});
