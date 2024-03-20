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

  label?: string;
  name?: string;
  onChange?: (value?: string) => void;
  error?: string;
}

function TextInput({
  type = "text",
  error,
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
      <Spacer size={5} />
      {!!error ? <S.ErrorMessage>{error}</S.ErrorMessage> : null}
    </>
  );
}

export default TextInput;
