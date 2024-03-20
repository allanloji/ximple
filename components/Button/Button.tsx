import { ButtonProps as RNButtonProps } from "react-native";

import * as S from "./Button.styles";

interface ButtonProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <S.Button
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }]}
    >
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}

export default Button;
