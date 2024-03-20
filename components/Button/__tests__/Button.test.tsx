import { render, screen } from "@testing-library/react-native";
import Button from "../Button";

describe("Button", () => {
  test("should show the title", () => {
    render(<Button title="Click me" />);
    expect(screen.getByText("Click me")).toBeTruthy();
  });
  test("should show the loading state", () => {
    render(<Button title="Click me" isLoading />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("should be disabled", () => {
    render(<Button title="Click me" disabled />);
    expect(screen.getByText("Click me")).toBeDisabled();
  });
});
