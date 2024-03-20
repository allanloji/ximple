import { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { Button, CreditOption, Spacer } from "@/components";
import { Credit, queryKeys } from "@/api/queryKeys";
import { useCreditContext } from "@/contexts/creditContext";

import * as S from "./CreditModal.styles";

function CreditModal() {
  const { update: updateCreditData } = useCreditContext();
  const { data: credits } = useQuery({
    ...queryKeys.credits.all,
    // Keep the data in cache for 5 minutes
    staleTime: 60 * 1000 * 5,
  });

  const [selectedCredit, setSelectedCredit] = useState<Credit>();

  const onCreditPressed = (credit: Credit) => {
    setSelectedCredit(credit);
  };

  const onContinuePressed = () => {
    updateCreditData({
      credit: selectedCredit,
    });
    router.navigate("/credit-acceptance");
  };

  return (
    <S.Container>
      <S.ModalContainer>
        <S.Title>¡Felicidades!</S.Title>
        <Spacer size={11} />
        <S.Subtitle>Encontramos estos créditos perfectos para ti:</S.Subtitle>
        <Spacer size={37} />
        {credits?.map((credit, index) => (
          <View key={credit.id}>
            <CreditOption
              label={credit.label}
              value={credit.value}
              selected={selectedCredit?.id === credit.id}
              onPress={() => onCreditPressed(credit)}
            />
            <Spacer size={index === credits.length - 1 ? 37 : 12} />
          </View>
        ))}

        <Button
          title="Seleccionar crédito"
          disabled={typeof selectedCredit === "undefined"}
          onPress={onContinuePressed}
        />
      </S.ModalContainer>
    </S.Container>
  );
}

export default CreditModal;
