import { TextInputProps as RNTextInputProps } from "react-native";
import * as S from "./TextInput.styles";
import Spacer from "../Spacer";

const keyboardTypes = {
  text: "default",
  email: "email-address",
};

type TextInputTypes = "text" | "email";

interface TextInputProps extends Omit<RNTextInputProps, "onChange"> {
  type?: TextInputTypes;
  disabled?: boolean;
  label?: string;
  name?: string;
  onChange?: (value?: string) => void;
}

function TextInput({
  type = "text",
  disabled = false,
  label,
  onChange,
  value,
}: TextInputProps) {
  return (
    <>
      {label ? (
        <>
          <S.Label>{label}</S.Label>
          <Spacer size={5} />
        </>
      ) : null}
      <S.TextInput
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardTypes[type] as RNTextInputProps["keyboardType"]}
      />
    </>
  );
}

export default TextInput;
