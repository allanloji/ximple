import { render, screen } from "@testing-library/react-native";
import TextInput from "../TextInput";

describe("TextInput", () => {
  test("should show the label", () => {
    render(<TextInput label="label" />);
    expect(screen.getByText("label")).toBeTruthy();
  });

  test("should show error message", () => {
    render(<TextInput label="label" error="error" />);
    expect(screen.getByText("error")).toBeTruthy();
  });
});
