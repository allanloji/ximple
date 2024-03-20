import { ButtonProps as RNButtonProps } from "react-native";

import * as S from "./Button.styles";

interface ButtonProps extends RNButtonProps {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return (
    <S.Button
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }]}
      {...props}
    >
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}

export default Button;
