import { Link } from "expo-router";

import { Button, CreditOption, Spacer } from "@/components";
import * as S from "./CreditModal.styles";

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
        <Link href="/credit-acceptance" asChild>
          <Button title="Seleccionar crédito" />
        </Link>
      </S.ModalContainer>
    </S.Container>
  );
}

export default CreditModal;
