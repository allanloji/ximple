import { ButtonProps as RNButtonProps } from "react-native";

import * as S from "./Button.styles";

interface ButtonProps extends RNButtonProps {
  title: string;
  isLoading?: boolean;
}

function Button({ title, isLoading = false, disabled, ...props }: ButtonProps) {
  return (
    <S.Button
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.95 : 1 }] }]}
      disabled={disabled || isLoading}
      {...props}
    >
      <S.Title>{isLoading ? "Cargando..." : title}</S.Title>
    </S.Button>
  );
}

export default Button;
