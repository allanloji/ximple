import { Button, Spacer } from "@/components";
import * as S from "./CreditModal.styles";
import { CreditOption } from "./components";

function CreditModal() {
  return (
    <S.Container>
      <S.ModalContainer>
        <S.Title>¡Felicidades!</S.Title>
        <Spacer size={11} />
        <S.Subtitle>Encontramos estos créditos perfectos para ti:</S.Subtitle>
        <Spacer size={37} />
        <CreditOption label="Crédito 1" value="$500" />
        <Spacer size={12} />
        <CreditOption label="Crédito 2" value="$1,500" />
        <Spacer size={12} />
        <CreditOption label="Crédito 3" value="$2,000" />
        <Spacer size={37} />
        <Button title="Seleccionar crédito" />
      </S.ModalContainer>
    </S.Container>
  );
}

export default CreditModal;
