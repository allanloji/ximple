import { render, screen } from "@testing-library/react-native";
import CreditOption from "../CreditOption";

describe("CreditOption", () => {
  test("should show the label and value", () => {
    const label = "label";
    const value = "value";
    render(<CreditOption label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(value);

    expect(labelElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });
});
