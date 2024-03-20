import * as S from "./CreditOption.styles";

interface CreditOptionProps {
  label: string;
  value: string;
  selected?: boolean;
  onPress?: () => void;
}

function CreditOption({
  label,
  value,
  onPress,
  selected = false,
}: CreditOptionProps) {
  return (
    <S.Container selected={selected} onPress={onPress}>
      <S.Text>{label}</S.Text>
      <S.Text>{value}</S.Text>
    </S.Container>
  );
}

export default CreditOption;
