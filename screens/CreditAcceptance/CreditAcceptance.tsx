import * as S from "./CreditAcceptance.styles";
import { Button, CreditOption, Spacer, Subtitle, Title } from "@/components";
import { useCreditContext } from "@/contexts/creditContext";

function CreditAcceptance() {
  const { data: creditData } = useCreditContext();

  return (
    <S.Container>
      <Spacer size={72} />
      <Title>Acepta tu crédito</Title>
      <Spacer size={11} />
      <Subtitle>Confirma que has seleccionado el crédito deseado.</Subtitle>
      <Spacer size={70} />
      <Subtitle>Crédito seleccionado:</Subtitle>
      <Spacer size={10} />
      <CreditOption
        label={creditData.credit?.label || "No seleccionado"}
        value={creditData.credit?.value || "-"}
      />
      <Spacer size={55} />
      <Button title="Contratar" />
    </S.Container>
  );
}

export default CreditAcceptance;
