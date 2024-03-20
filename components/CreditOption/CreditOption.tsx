import * as S from "./CreditOption.styles";

interface CreditOptionProps {
  label: string;
  value: string;
}

function CreditOption({ label, value }: CreditOptionProps) {
  return (
    <S.Container>
      <S.Text>{label}</S.Text>
      <S.Text>{value}</S.Text>
    </S.Container>
  );
}

export default CreditOption;
