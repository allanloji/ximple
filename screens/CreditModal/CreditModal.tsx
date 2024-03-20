import { Link } from "expo-router";

import { Button, CreditOption, Spacer } from "@/components";
import * as S from "./CreditModal.styles";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { View } from "react-native";

function CreditModal() {
  const { data: credits } = useQuery({
    ...queryKeys.credits.all,
    staleTime: 60 * 1000,
  });
  return (
    <S.Container>
      <S.ModalContainer>
        <S.Title>¡Felicidades!</S.Title>
        <Spacer size={11} />
        <S.Subtitle>Encontramos estos créditos perfectos para ti:</S.Subtitle>
        <Spacer size={37} />
        {credits?.map((credit, index) => (
          <View key={credit.id}>
            <CreditOption label={credit.label} value={credit.value} />
            <Spacer size={index === credits.length - 1 ? 37 : 12} />
          </View>
        ))}

        <Link href="/credit-acceptance" asChild>
          <Button title="Seleccionar crédito" />
        </Link>
      </S.ModalContainer>
    </S.Container>
  );
}

export default CreditModal;
