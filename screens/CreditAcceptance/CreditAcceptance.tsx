import { SafeAreaView } from "react-native-safe-area-context";

import * as S from "./CreditAcceptance.styles";
import { Button, CreditOption, Spacer } from "@/components";

function CreditAcceptance() {
  return (
    <SafeAreaView>
      <S.Container>
        <Spacer size={64} />
        <S.Title>Acepta tu crédito</S.Title>
        <Spacer size={11} />
        <S.Subtitle>
          Confirma que has seleccionado el crédito deseado.
        </S.Subtitle>
        <Spacer size={70} />
        <S.Subtitle>Crédito seleccionado:</S.Subtitle>
        <Spacer size={10} />
        <CreditOption label="Crédito 1" value="$500" />
        <Spacer size={55} />
        <Button title="Contratar" />
      </S.Container>
    </SafeAreaView>
  );
}

export default CreditAcceptance;
